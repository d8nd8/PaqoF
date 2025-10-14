import styled from '@emotion/styled';

export const ReferralListContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  width: '100%',
  margin: '0 auto'
});

export const ReferralCard = styled.div({
  backgroundColor: '#ffffff',
  borderRadius: '13px 13px 0 0',
  padding: '14px',
});

export const CardHeader = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '14px',
  marginBottom: '8px',
});

export const CardTitle = styled.h2({
  fontSize: '18px',
  fontWeight: '600',
  color: '#000000',
  margin: 0,
  lineHeight: '22px'
});

interface CountBadgeProps {
  isEmpty: boolean;
}

export const CountBadge = styled.div<CountBadgeProps>(({ theme }) => ({
  backgroundColor: theme.colors.primary500,
  color: theme.colors.neutral950,
  fontSize: '16px',
  fontWeight: '600',
  padding: '2px 6px',
  borderRadius: '6px',
  minWidth: '24px',
  textAlign: 'center',
  lineHeight: '21px',
}));

export const EmptyState = styled.div(({ theme }) => ({
  padding: '20px',
  textAlign: 'center',
  backgroundColor: theme.colors.systemBackground,
  borderRadius: '13px',
}));

export const EmptyText = styled.p(({ theme }) => ({
  fontSize: '16px',
  color: '#8E8E93',
  margin: 0,
  lineHeight: '22px'
}));

export const ReferralsList = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px'
});

// Стили для ReferralItem компонента
export const ReferralItem = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '12px 0',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',
  borderRadius: '8px',

  '&:last-child': {
    borderBottom: 'none'
  },
}));

export const UserInfo = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '12px'
});

export const Avatar = styled.img(({ theme }) => ({
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  objectFit: 'cover',
  backgroundColor: '#f5f5f5'
}));

export const UserDetails = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px'
});

export const Username = styled.div(({ theme }) => ({
  fontSize: '15px',
  fontWeight: '500',
  color: theme.colors.neutral950,
  lineHeight: '20px'
}));

export const Level = styled.div(({ theme }) => ({
  fontSize: '11px',
  fontWeight: '600',
  color: theme.colors.textSecondary,
  lineHeight: '13px',
  backgroundColor:theme.colors.textQuaternary,
  padding: '2px 6px',
  borderRadius: '6px',
  width: 'fit-content'
}));

export const EarningsContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
});

export const Earnings = styled.div(({ theme }) => ({
  fontSize: '13px',
  fontWeight: 400,
  color: '#00B347',
  lineHeight: '18px',
  textAlign: 'right',
}));

export const ProgressContainer = styled.div<{ size: number }>(({ size }) => ({
  position: 'relative',
  width: `${size}px`,
  height: `${size}px`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const ProgressSvg = styled.svg<{ size: number }>(({ size }) => ({
  width: `${size}px`,
  height: `${size}px`,
  transform: 'rotate(-90deg)',
}));

export const ProgressCircleBackground = styled.circle({
  fill: 'none',
});

export const ProgressCircle = styled.circle({
  fill: 'none',
  strokeLinecap: 'round',
  transition: 'stroke-dashoffset 0.3s ease',
});

export const ProgressText = styled.div<{ size: number }>(({ size }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: `${size}px`,
  height: `${size}px`,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  fontSize: '9px',
  fontWeight: 600,
  color: '#000000',
  lineHeight: '13px',
  textAlign: 'center',
}));