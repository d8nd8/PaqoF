import React from "react";
import { useNavigate } from "react-router-dom";
import ChevronLeft from "@icons/chevron-left.svg?react";
import { HeaderWrapper, BackButton, Title, RightSlot } from "./PageHeader.styled";
import { useSafeAreaInsets } from "@/shared/hooks/useSafeAreaInsets";

interface Props {
  title: string;
  color?: string;
  onBack?: () => void;
  rightSlot?: React.ReactNode;
  showBackButton?: boolean; // добавили пропс
}

export const PageHeader: React.FC<Props> = ({
                                              title,
                                              color,
                                              onBack,
                                              rightSlot,
                                              showBackButton = true,
                                            }) => {
  const navigate = useNavigate();
  const { top } = useSafeAreaInsets();

  const handleBack = () => {
    if (onBack) onBack();
    else navigate(-1);
  };

  return (
    <HeaderWrapper insetTop={top}>
      {showBackButton && (
        <BackButton onClick={handleBack} color={color}>
          <ChevronLeft />
        </BackButton>
      )}

      <Title color={color}>{title}</Title>

      <RightSlot color={color}>
        {rightSlot ?? <div style={{ width: 24 }} />}
      </RightSlot>
    </HeaderWrapper>
  );
};
