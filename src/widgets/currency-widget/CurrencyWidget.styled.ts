import styled from "@emotion/styled";

export const CurrencyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxl};
  padding: ${({ theme }) => theme.spacing.xxl};
  background: ${({ theme }) => theme.colors.systemBackground};
`;


export const Header = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: theme.spacing.xxl,
  marginBottom: theme.spacing.lg,
}));

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
  gap: ${({ theme }) => theme.spacing.sm};
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
  align-items: center;
  background: ${({ theme }) => theme.colors.systemElevatedBackground};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
`;

export const ChainIcon = styled.div`
  margin-right: ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChainInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const ChainHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const ChainTitle = styled.div`
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const ChainBadge = styled.div`
  background: ${({ theme }) => theme.colors.neutral300};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  padding: 2px 6px;
  border-radius: 6px;
`;

export const ChainAddress = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const ChainFee = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const CopyButton = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;

  svg {
    fill: ${({ theme }) => theme.colors.textSecondary};
    transition: ${({ theme }) => theme.transition.fast};

    &:hover {
      fill: ${({ theme }) => theme.semantic.primaryActive};
    }
  }
`;
