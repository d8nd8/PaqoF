import React, { useState } from "react";
import Toggle from "@/shared/components/Toggle/Toggle";
import { SecurityPinCode } from "@/features/security-pin-code";
import FullOverlay from "@/shared/components/full-overlay/FullOverlay";
import useUserStore from "@/shared/stores/user";
import { useTranslation } from 'react-i18next'

type Step = "idle" | "create" | "confirm-old" | "create-new" | "remove";

type Props = {
  onOverlayChange?: (open: boolean) => void;
};

export const PinToggle: React.FC<Props> = ({ onOverlayChange }) => {
  const { t } = useTranslation();
  const { setEntryCode, changeEntryCode, deleteEntryCode } = useUserStore();
  const [enabled, setEnabled] = useState(Boolean(localStorage.getItem("pin")));
  const [showOverlay, setShowOverlay] = useState(false);
  const [step, setStep] = useState<Step>("idle");
  const [oldPin, setOldPin] = useState<string | null>(null);

  const openOverlay = (newStep: Step) => {
    setStep(newStep);
    setShowOverlay(true);
    onOverlayChange?.(true);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
    setStep("idle");
    setOldPin(null);
    onOverlayChange?.(false);
  };

  const handleToggle = () => {
    if (!enabled) {
      openOverlay("create");
    } else {
      openOverlay("remove");
    }
  };

  const handleChangeCode = () => {
    openOverlay("confirm-old");
  };

  const handleComplete = async (pin: string) => {
    if (step === "create") {
      await setEntryCode({ code: pin });
      localStorage.setItem("pin", pin);
      setEnabled(true);
      closeOverlay();
    }

    if (step === "remove") {
      const savedPin = localStorage.getItem("pin");
      if (savedPin === pin) {
        await deleteEntryCode({ code: pin });
        localStorage.removeItem("pin");
        setEnabled(false);
      }
      closeOverlay();
    }

    if (step === "confirm-old") {
      const savedPin = localStorage.getItem("pin");
      if (savedPin === pin) {
        setOldPin(pin);
        setStep("create-new");
      } else {
        closeOverlay();
      }
    }

    if (step === "create-new" && oldPin) {
      await changeEntryCode({ oldCode: oldPin, newCode: pin });
      localStorage.setItem("pin", pin);
      setEnabled(true);
      closeOverlay();
    }
  };

  return (
    <>
      <Toggle checked={enabled} onChange={handleToggle} />

      <FullOverlay isOpen={showOverlay} onClose={closeOverlay}>
        {step === "idle" && enabled ? (
          <button
            type="button"
            onClick={handleChangeCode}
            style={{
              marginTop: 20,
              padding: "12px 16px",
              borderRadius: 8,
              background: "#eee",
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            {t("pin.changeButton")}
          </button>
        ) : (
          <SecurityPinCode
            mode={
              step === "create"
                ? "create"
                : step === "remove"
                  ? "remove"
                  : step === "confirm-old"
                    ? "confirm"
                    : "createNew"
            }
            onComplete={handleComplete}
          />
        )}
      </FullOverlay>
    </>
  );
};

export default PinToggle;
