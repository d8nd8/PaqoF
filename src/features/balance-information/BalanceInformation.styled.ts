import styled from '@emotion/styled';
import { theme } from '@/styles/theme'

export const BalanceCardContainer = styled.div(({theme}) => ({
  backgroundColor: theme.colors.systemElevatedBackground,
  borderRadius: '0 0 25px 25px',
  padding: '34px 14px 14px',
  boxShadow: '0 0 25px 0 rgba(0, 0, 0, 0.05)',
}));

export const BalanceHeader = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '2px',
  marginBottom: '12px'
});

export const BalanceTitle = styled.span(({theme}) => ({
  fontSize: '12px',
  fontWeight: 400,
  color: theme.colors.textSecondary,
  lineHeight: '17px'
}));

export const EyeButton = styled.button({
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:focus': {
    outline: 'none'
  },

  '& svg': {
    width: '16px',
    height: '16px'
  }
});

export const BalanceAmount = styled.div(({theme}) => ({
  fontSize: '34px',
  fontWeight: '700',
  fontStyle: 'normal',
  color: theme.colors.neutral950,
  lineHeight: '37px',
  marginBottom: '14px',
  display: 'flex',
  alignItems: 'baseline',
  height: '41px',
}));

export const BalanceDecimal = styled.span(({theme}) => ({
  fontSize: '22px',
  color:  theme.colors.textSecondary,
  fontWeight: '700'
}));

export const HiddenBalance = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  marginBottom: '14px',
  height: '41px',
});

export const BalanceDot = styled.div(({theme}) => ({
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  backgroundColor: theme.colors.neutral950,
}));

export const ActionButtons = styled.div({
  display: 'flex',
  gap: '14px'
});

export const ActionItemContainer = styled.div({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '4px'
});

export const ActionButton = styled.button(({theme}) => ({
  width: '100%',
  backgroundColor: theme.colors.systemBackground,
  border: 'none',
  borderRadius: '12px',
  padding: '10px 12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  outline: 'none',

  '&:focus': {
    outline: 'none'
  },

  '&:hover': {
    backgroundColor: theme.colors.textQuaternary,
  },
}));

export const ActionIcon = styled.div(({theme}) => ({
  width: '24px',
  height: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.colors.neutral950,

  '& svg': {
    width: '100%',
    height: '100%',
    fill: 'currentColor'
  }
}));

export const ActionLabel = styled.span({
  fontSize: '12px',
  fontWeight: '400',
  color: theme.colors.textSecondary,
  lineHeight: '13px',
  textAlign: 'center'
});

export const TopRow = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '30px',
});

export const UserInfo = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '18px',
});

export const Avatar = styled.img({
  width: '44px',
  height: '44px',
  borderRadius: '50%',
  objectFit: 'cover',
  background: theme.colors.primary300,
});

export const UserText = styled.div({
  display: 'flex',
  fontSize: '11px',
  lineHeight: '13px',
  flexDirection: 'column',
  color: theme.colors.textSecondary,
  fontWeight: 600
});

export const Greeting = styled.span(({ theme }) => ({
  fontSize: '11px',
  lineHeight: '13px',
  flexDirection: 'column',
  color: theme.colors.textSecondary,
}));

export const Username = styled.span(({ theme }) => ({
  fontSize: '15px',
  lineHeight: '20px',
  fontWeight: 600,
  color: theme.colors.textPrimary,
}));

export const NotificationButton = styled.button({
  position: 'relative',
  background: theme.colors.systemBackground,
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '44px',
  height: '44px',
  borderRadius: '50%',

  '& svg': {
    width: '24px',
    height: '24px',
  },

  '&:focus': {
    outline: 'none'
  }
});

export const NotificationDot = styled.span({
  position: 'absolute',
  top: '9px',
  right: '9px',
  width: '6px',
  height: '6px',
  backgroundColor: '#FF3B30',
  borderRadius: '50%',
});
