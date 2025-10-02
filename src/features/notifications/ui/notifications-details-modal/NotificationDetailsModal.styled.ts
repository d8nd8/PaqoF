import styled from '@emotion/styled';
import { theme } from '@/styles/theme'

export const NotificationContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
});

export const NotificationWrapper = styled.div({});

export const NotificationImage = styled.img({
  width: '100%',
  height: 'auto',
  borderRadius: '13px',
  marginBottom: '14px',
});

export const NotificationTitle = styled.h2(({theme}) => ({
  fontSize: '20px',
  lineHeight: '25px',
  fontWeight: 600,
  color: theme.colors.textPrimary,
  marginBottom: '5px',
}));

export const NotificationText = styled.p(({theme}) => ({
  fontSize: '15px',
  lineHeight: '20px',
  color: theme.colors.textSecondary,
}));

export const ButtonWrapper = styled.div<{ $insetBottom?: number }>(({ $insetBottom = 0 }) => ({
  display: 'flex',
  justifyContent: 'center',
  paddingBottom: `calc(${$insetBottom}px + 10px)`,
}));

export const ActionButton = styled.button({
  backgroundColor: theme.colors.primary500,
  border: 'none',
  borderRadius: '10px',
  padding: '11px',
  fontSize: '15px',
  fontWeight: 600,
  color: theme.colors.textPrimary,
  cursor: 'pointer',
  width: '100%',
});
