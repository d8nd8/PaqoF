import React, { useState } from "react";
import {
  PinWrapper,
  PinHeader,
  PinTitle,
  PinSubtitle,
  Dots,
  Dot,
  Keypad,
  Key,
  DeleteKey,
  ErrorText,
} from "./PinWidget.styled";
import { useNavigate } from "react-router-dom";

export const PinWidget: React.FC = () => {
  const [step, setStep] = useState<"create" | "confirm" | "done">("create");
  const [pin, setPin] = useState<string[]>([]);
  const [firstPin, setFirstPin] = useState<string[]>([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleNumberClick = (num: string) => {
    if (pin.length >= 4) return;
    const newPin = [...pin, num];
    setPin(newPin);

    if (newPin.length === 4) {
      if (step === "create") {
        setFirstPin(newPin);
        setPin([]);
        setStep("confirm");
      } else if (step === "confirm") {
        if (newPin.join("") === firstPin.join("")) {
          localStorage.setItem("pin", newPin.join(""));
          setStep("done");
          navigate("/security"); // возвращаемся назад
        } else {
          setError("Пин-коды не совпадают");
          setPin([]);
        }
      }
    }
  };

  const handleDelete = () => {
    setPin(pin.slice(0, -1));
  };

  return (
    <PinWrapper>
      <PinHeader>
        {step === "create" && (
          <>
            <PinTitle>Добавить пин-код</PinTitle>
            <PinSubtitle>
              Никто, кроме вас, не сможет зайти в приложение
            </PinSubtitle>
          </>
        )}
        {step === "confirm" && (
          <>
            <PinTitle>Повторите пин-код</PinTitle>
            {error && <ErrorText>{error}</ErrorText>}
          </>
        )}
      </PinHeader>

      <Dots>
        {[0, 1, 2, 3].map((i) => (
          <Dot key={i} $filled={i < pin.length} $error={!!error} />
        ))}
      </Dots>

      <Keypad>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((n) => (
          <Key key={n} onClick={() => handleNumberClick(String(n))}>
            {n}
          </Key>
        ))}
        <DeleteKey onClick={handleDelete}>⌫</DeleteKey>
      </Keypad>
    </PinWrapper>
  );
};

export default PinWidget;
