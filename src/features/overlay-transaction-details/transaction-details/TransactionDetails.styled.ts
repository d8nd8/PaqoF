import styled from '@emotion/styled';

export const Container = styled.div(({
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
}));

export const Block = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.systemElevatedBackground,
  borderRadius: '13px',
  padding: '14px',
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
}));

export const Header = styled.div(({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '20px'
}));

export interface TransactionIconProps {
  $type: 'withdraw' | 'deposit';
  $status: 'success' | 'pending' | 'failed' | 'problem';
}
export const TransactionIcon = styled.div<TransactionIconProps>(({ theme, $type, $status }) => ({
  width: '75px',
  height: '75px',
  borderRadius: '50%',
  backgroundColor:
    $status === 'problem'
      ? theme.colors.warning500
      : $type === 'withdraw'
        ? theme.colors.success500
        : theme.colors.primary500,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '24px',
  fontWeight: 700,
  color:
    $type === 'deposit' && $status !== 'problem'
      ? theme.colors.neutral950
      : theme.colors.neutral100,
  marginBottom: '10px',
}));

export const TransactionDate = styled.div(({ theme }) => ({
  fontSize: '13px',
  lineHeight: '18px',
  fontWeight: 400,
  color: theme.colors.textPrimary,
  textAlign: 'center',
  marginTop: 0,
  marginBottom: '16px',
}));

export const TransactionTitle = styled.div(({ theme }) => ({
  fontSize: '15px',
  lineHeight: '20px',
  fontWeight: 400,
  color: theme.colors.neutral950,
  marginTop: '8px',   // 👈 добавил отступ сверху
  marginBottom: '10px',
}));
export interface TransactionAmountProps {
  $type: TransactionIconProps['$type'];
}

export const TransactionAmount = styled.div<TransactionAmountProps>(({ theme, $type }) => ({
  fontSize: '22px',
  lineHeight: '28px',
  fontWeight: 700,
  letterSpacing: '-0.3px',
  color: $type === 'deposit'
    ? theme.colors.success500
    : theme.colors.neutral950,
}));
export const TransactionAmountUSD = styled.div(({ theme }) => ({
  fontSize: '15px',
  lineHeight: '20px',
  color: theme.colors.textSecondary,
  marginBottom: '10px',
  fontWeight: 400,
}));

export interface StatusBadgeProps {
  $status: 'success' | 'pending' | 'failed' | 'problem';
}
export const StatusBadge = styled.div<StatusBadgeProps>(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  padding: '5px 10px',
  borderRadius: '8px',
  backgroundColor: theme.colors.systemElevatedBackground,
  marginTop: '10px',
}));

export interface StatusIconProps {
  $status: StatusBadgeProps['$status'];
}
export const StatusIcon = styled.div<StatusIconProps>(({ theme, $status }) => ({
  width: '16px',
  height: '16px',
  borderRadius: '50%',
  backgroundColor:
    $status === 'success'
      ? theme.colors.success500
      : $status === 'pending' || $status === 'problem'
        ? theme.colors.warning500
        : $status === 'failed'
          ? theme.colors.error500
          : theme.colors.neutral500,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.colors.neutral100,
  fontSize: '10px',
  fontWeight: 700,
}));

export interface StatusTextProps {
  $status: StatusBadgeProps['$status'];
}
export const StatusText = styled.div<StatusTextProps>(({ theme }) => ({
  fontSize: '13px',
  fontWeight: 400,
  color: theme.colors.neutral950,
}));

export const DetailsSection = styled.div(({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
}));

export const DetailRow = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const DetailLabel = styled.div(({ theme }) => ({
  fontSize: '13px',
  lineHeight: '18px',
  color: theme.colors.textSecondary,
  fontWeight: 400,
  flex: 1,
}));

export const DetailValue = styled.div(({ theme }) => ({
  fontSize: '13px',
  lineHeight: '18px',
  color: theme.colors.neutral950,
  fontWeight: 400,
  textAlign: 'right',
}));

export const DetailValueWithCopy = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '9px',
}));

export const HashValue = styled.div(({ theme }) => ({
  fontSize: '13px',
  color: theme.colors.neutral950,
  fontWeight: 400,
  letterSpacing: '-0.2px',
}));

export const CopyButton = styled.button(() => ({
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0.5,
  transition: 'opacity 0.2s ease',
  '&:hover': {
    opacity: 0.8,
  },
  '&:active': {
    opacity: 1,
  },
}));

export const CopyIcon = styled.span(() => ({
  fontSize: '15px',
  lineHeight: 1,
}));

export const ProblemAlert = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.warning100,
  borderRadius: '12px',
  padding: '15px',
  margin: '20px 0',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
}));

export const ProblemIcon = styled.div(({ theme }) => ({
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  backgroundColor: theme.colors.warning500,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.colors.neutral100,
  fontSize: '13px',
  fontWeight: 700,
  flexShrink: 0,
}));

export const ProblemText = styled.div(({ theme }) => ({
  fontSize: '13px',
  fontWeight: 600,
  color: theme.colors.neutral950,
  lineHeight: '18px',
  flex: 1,
}));

export const AMLButton = styled.button(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: '15px',
  margin: '20px 0',
  border: 'none',
  borderRadius: '10px',
  backgroundColor: theme.colors.success100,
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',
  '&:hover': {
    backgroundColor: theme.colors.success200,
  },
}));

export const AMLContent = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
}));

export const AMLIcon = styled.div(({ theme }) => ({
  width: '24px',
  height: '24px',
  borderRadius: '50%',
  backgroundColor: theme.colors.success500,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.colors.neutral100,
  fontSize: '14px',

}));

export const AMLText = styled.div(({ theme }) => ({
  fontSize: '13px',
  fontWeight: 700,
  color: theme.colors.neutral950,
}));

export const ChevronIcon = styled.div(({ theme }) => ({
  color: theme.colors.textSecondary,
  fontSize: '20px',
  fontWeight: 300,
  transform: 'rotate(0deg)',
  transition: 'transform 0.2s ease',
}));
