import styled from '@emotion/styled'

export const CurrencyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.page};
  padding: ${({ theme }) => theme.spacing.page};
  padding-top: 0;
  background: ${({ theme }) => theme.colors.systemBackground};
`

export const Header = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  padding: '16px',
}))

export const BackButton = styled.button(({ theme }) => ({
  position: 'absolute',
  left: '16px',
  top: '50%',
  transform: 'translateY(-50%)',
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',

  '& svg': {
    width: '24px',
    height: '24px',
    stroke: theme.colors.textPrimary,
  },
}))

export const Title = styled.h2(({ theme }) => ({
  margin: 0,
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: '21px',
  letterSpacing: '-0.31px',
  color: theme.colors.textPrimary,
}))

export const BalanceWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`

export const CopyNotification = styled.div`
  position: fixed;
  top: 100px;
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
`

export const BalanceSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`

export const BalanceAmount = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.xxl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 22px;
`

export const BalanceFiat = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
`

export const ActionsRow = styled.div`
  display: flex;
  justify-content: space-around;
  gap: ${({ theme }) => theme.spacing.lg};
`

export const ChainList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const ChainTypeCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: ${({ theme }) => theme.colors.systemElevatedBackground};
  border-radius: 13px;
  padding: 14px;
  overflow: hidden;
`

export const ChainRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 38px;
`

export const ChainIcon = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: 38px;
    height: 38px;
  }
`

export const ChainContent = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0;
  padding-bottom: 2px;
`

export const ChainHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: -2px;
`

export const ChainTitle = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.08px;
  color: ${({ theme }) => theme.colors.textPrimary};
`

export const ChainBadge = styled.span`
  flex-shrink: 0;
  background: ${({ theme }) => theme.colors.textQuaternary};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.06px;
  padding: 2px 3px;
  border-radius: 5px;
`

export const ChainAddress = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.textSecondary} !important;
  max-width: 130px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const ChainActions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  & path {
    fill: ${({ theme }) => theme.colors.textSecondary};
  }
`

export const ChainButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 5px;
  border: none;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.textQuaternary};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition?.fast ?? 'opacity 0.2s'};

  svg {
    width: 22px;
    height: 22px;
    fill: ${({ theme }) =>
      theme.colors.reverseBackgroundPrimary ?? theme.colors.textPrimary};
  }

  &:active {
    opacity: 0.8;
  }
`

export const ChainFee = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.textSecondary} !important;
  overflow: hidden;
  text-overflow: ellipsis;
`
