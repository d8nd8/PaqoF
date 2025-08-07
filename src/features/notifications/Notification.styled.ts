import styled from '@emotion/styled';

interface NotificationContainerProps {
  isRead?: boolean;
}

interface NotificationIconProps {
  backgroundColor?: string;
}

interface NotificationDotProps {
  isRead?: boolean;
}

export const NotificationContainer = styled.div<NotificationContainerProps>(({theme}) => ({
  backgroundColor: theme.colors.systemElevatedBackground,
  borderRadius: '13px',
  padding: '14px',
  cursor: 'pointer',
  transition: 'all 0.2s ease',

  '&:hover': {
    backgroundColor: theme.colors.textQuaternary,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
  },

  '&:active': {
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)'
  }
}));

export const NotificationContent = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
  width: '100%'
});

export const NotificationHeader = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  width: '100%'
});


export const NotificationDot = styled.div<NotificationDotProps>(({ isRead = false, theme }) => ({
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  backgroundColor: isRead ? 'transparent' : theme.colors.error500,
  flexShrink: 0
}));

export const NotificationTitle = styled.h3(({theme}) => ({
  fontSize: '15px',
  fontWeight: '600',
  color: theme.colors.neutral950,
  lineHeight: '20px',
  margin: 0,
  flex: 1,
  minWidth: 0,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
}));

export const NotificationDate = styled.span(({theme}) => ({
  fontSize: '11px',
  color: theme.colors.textSecondary,
  lineHeight: '13px',
  flexShrink: 0,
  whiteSpace: 'nowrap'
}));

export const NotificationBody = styled.div({
  display: 'flex',
  gap: '5px',
  alignItems: 'flex-start'
});

export const NotificationDescription = styled.p(({theme}) => ({
  fontSize: '13px',
  fontWeight: '400',
  color: theme.colors.textSecondary,
  lineHeight: '18px',
  margin: 0,
  flex: 1,
  minWidth: 0,
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
}));

export const NotificationIcon = styled.div<NotificationIconProps>(({ backgroundColor = '#4CAF50' }) => ({
  width: '54px',
  height: '54px',
  borderRadius: '13px',
  backgroundColor: backgroundColor,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,

  '& svg': {
    width: '32px',
    height: '32px',
    fill: '#ffffff'
  }
}));

export const NotificationIconText = styled.span(({theme}) => ({
  color: theme.colors.systemElevatedBackground,
  fontSize: '24px',
  fontWeight: '700',
  lineHeight: '1'
}));