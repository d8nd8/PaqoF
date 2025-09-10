import styled from "@emotion/styled";

export const CurrencyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxl};
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.systemBackground};
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.xxl};
  margin-bottom: 0;
`;

export const Title = styled.h2(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize.md,
  fontWeight: theme.typography.fontWeight.semibold,
  lineHeight: "21px",
  letterSpacing: "-0.31px",
  color: theme.colors.textPrimary,
  margin: 0,
  textAlign: "center",
}));

export const BalanceWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

export const CopyNotification = styled.div`
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.systemElevatedBackground};
  padding: 8px 12px;
  border-radius: 12px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textPrimary};
  z-index: 10;
  opacity: 1;
  animation: fadeInOut 1.5s ease;

  svg {
    fill: ${({ theme }) => theme.colors.success600};
    width: 16px;
    height: 16px;
  }

  @keyframes fadeInOut {
    0% {
      opacity: 0;
      transform: translateX(-50%) translateY(-10px);
    }
    10% {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
    90% {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateX(-50%) translateY(-10px);
    }
  }
`;

export const BalanceSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const BalanceAmount = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.xxl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`;

export const BalanceFiat = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
`;

export const ActionsRow = styled.div`
  display: flex;
  justify-content: space-around;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const ChainList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const ChainTypeCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background: ${({ theme }) => theme.colors.systemElevatedBackground};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
`;

export const ChainIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.spacing.md};
    width: 38px;  
    height: 38px;
`;

export const ChainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ChainRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ChainInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ChainHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const ChainTitle = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 13px;
  line-height: 1;
  letter-spacing: -0.08px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const ChainBadge = styled.div`
  background: ${({ theme }) => theme.colors.neutral300};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 11px;
  padding: 2px 6px;
  border-radius: 6px;
`;

export const ChainAddress = styled.div`
  margin-top: -8px; 
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const ChainFee = styled.div`
  margin-top: 2px; // небольшой отступ от адреса
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const CopyGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CopyButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 5px;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.textQuaternary};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.fast};

  svg {
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.colors.reverseBackgroundPrimary};
    transition: ${({ theme }) => theme.transition.fast};
  }

  &:hover {
    background: ${({ theme }) => theme.semantic.primaryActive};
  }

  &:hover svg {
    fill: ${({ theme }) => theme.colors.reverseBackgroundPrimary};
  }
`;
