import React, { useState } from "react";
import Toggle from "@/shared/components/Toggle/Toggle";
import { SecurityPinCode } from "@/features/security-pin-code";
import FullOverlay from '@/shared/components/full-overlay/FullOverlay'
import useUserStore from '@/shared/stores/user'


type Step = "idle" | "create" | "confirm-old" | "create-new"

export const PinToggle: React.FC = () => {
  const { setEntryCode, changeEntryCode } = useUserStore();
  const [enabled, setEnabled] = useState(Boolean(localStorage.getItem("pin")));
  const [showOverlay, setShowOverlay] = useState(false);
  const [step, setStep] = useState<Step>("idle");
  const [oldPin, setOldPin] = useState<string | null>(null);

  const handleToggle = () => {
    if (!enabled) {
      setStep("create");
    } else {
      setStep("confirm-old");
    }
    setShowOverlay(true);
  };

  const handleComplete = async (pin: string) => {
    if (step === "create") {
      await setEntryCode({ code: pin });
      localStorage.setItem("pin", pin);
      setEnabled(true);
      setShowOverlay(false);
    }

    if (step === "confirm-old") {
      const savedPin = localStorage.getItem("pin");
      if (savedPin === pin) {
        setOldPin(pin);
        setStep("create-new");
      } else {
        setShowOverlay(false);
      }
    }

    if (step === "create-new" && oldPin) {
      await changeEntryCode({ oldCode: oldPin, newCode: pin });
      localStorage.setItem("pin", pin);
      setEnabled(true);
      setOldPin(null);
      setShowOverlay(false);
    }
  };

  return (
    <>
      <Toggle checked={enabled} onChange={handleToggle} />

      <FullOverlay isOpen={showOverlay} onClose={() => setShowOverlay(false)}>
        <SecurityPinCode
          mode={
            step === "create"
              ? "create"
              : step === "confirm-old"
                ? "confirm"
                : "create"
          }
          onComplete={handleComplete}
        />
      </FullOverlay>
    </>
  );
};

export default PinToggle;
