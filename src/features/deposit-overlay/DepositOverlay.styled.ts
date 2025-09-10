import styled from "@emotion/styled";

export const OverlayBackground = styled.div`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.semantic.backgroundOverlay};
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: ${({ theme }) => theme.zIndex.modal};
`;

export const OverlayContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.systemBackground};
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  padding: 24px 20px 10vh;
  box-shadow: ${({ theme }) => theme.semantic.shadowLight};
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

  &:hover {
    color: ${({ theme }) => theme.colors.neutral600};
  }
`;

export const OverlayHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
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
  gap: 12px;
  padding: 14px 16px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.neutral100};
  box-shadow: ${({ theme }) => theme.semantic.shadowLight};
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.neutral200};
  }
`;

export const OptionIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OptionText = styled.div`
  display: flex;
  flex-direction: column;
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
