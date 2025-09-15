import React, { useState } from "react";
import Toggle from "@/shared/components/Toggle/Toggle";
import { SecurityPinCode } from "@/features/security-pin-code";
import FullOverlay from '@/shared/components/full-overlay/FullOverlay'


export const PinToggle: React.FC = () => {
  const [enabled, setEnabled] = useState(Boolean(localStorage.getItem("pin")));
  const [showOverlay, setShowOverlay] = useState(false);

  const handleToggle = () => {
    setShowOverlay(true);
  };

  const handleComplete = (pin: string) => {
    if (!enabled) {
      localStorage.setItem("pin", pin);
      setEnabled(true);
    } else {
      const savedPin = localStorage.getItem("pin");
      if (savedPin === pin) {
        localStorage.removeItem("pin");
        setEnabled(false);
      }
    }
    setShowOverlay(false);
  };

  return (
    <>
      <Toggle checked={enabled} onChange={handleToggle} />

      <FullOverlay isOpen={showOverlay} onClose={() => setShowOverlay(false)}>
        <SecurityPinCode
          mode={enabled ? "remove" : "create"}
          onComplete={handleComplete}
        />
      </FullOverlay>
    </>
  );
};

export default PinToggle;
