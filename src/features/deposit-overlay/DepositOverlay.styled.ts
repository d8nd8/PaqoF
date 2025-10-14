import styled from "@emotion/styled";

interface OverlayBackgroundProps {
  $isVisible?: boolean;
  $isClosing?: boolean;
}

export const OverlayBackground = styled.div<OverlayBackgroundProps>(
  ({ theme, $isVisible = false, $isClosing = false }) => ({
    position: "fixed",
    inset: 0,
    background: theme.semantic.backgroundOverlay || "rgba(0, 0, 0, 0.4)",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    zIndex: theme.zIndex.modal,
    pointerEvents: $isVisible ? "auto" : "none",
    opacity: $isVisible && !$isClosing ? 1 : 0,
    transition: "opacity 350ms ease-in-out",
  })
);

export const OverlayContainer = styled.div<{ $isVisible?: boolean }>`
  width: 100%;
  background: ${({ theme }) => theme.colors.systemBackground};
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  padding: 24px 20px 10vh;
  box-shadow: ${({ theme }) => theme.semantic.shadowLight};
  transition: transform 0.3s ease-out;
  transform: translateY(${(props) => (props.$isVisible ? "0" : "100%")});
`;

export const OverlayHeaderTop = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
`;

export const CloseButton = styled.button`
  border: none;
  background: none;
  padding: 0;

  font-family: Inter, sans-serif;
  font-size: 13px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.08px;
  color: ${({ theme }) => theme.semantic.textPrimary};
  cursor: pointer;
`;

export const OverlayHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OverlayTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: -0.45px;
  margin: 0;
  color: ${({ theme }) => theme.semantic.textPrimary};
`;

export const Description = styled.p`
  margin: 0 0 10px;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.08px;
  color: ${({ theme }) => theme.semantic.textSecondary};
  text-align: center;
  white-space: normal;
  word-break: break-word;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.neutral100};
  box-shadow: ${({ theme }) => theme.semantic.shadowLight};
  cursor: pointer;
  transition: background 0.2s ease;
`;

export const OptionIcon = styled.div`
  width: 38px;
  height: 38px;
  min-width: 38px;
  min-height: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 14px;

  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.primary600} 0%,
    ${({ theme }) => theme.colors.primary200} 100%
  );

  & svg {
    width: 25px;
    height: 25px;
  }
`;

export const OptionText = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const OptionTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.semantic.textPrimary};
`;

export const OptionSubtitle = styled.small`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.semantic.textSecondary};
`;

export const OptionRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 14px;

  & svg {
    width: 18px;
    height: 18px;
    stroke-width: 1.5;
    color: ${({ theme }) => theme.semantic.textTertiary};
  }
`;
