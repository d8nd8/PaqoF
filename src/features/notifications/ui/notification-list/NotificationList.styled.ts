import styled from '@emotion/styled';

export const NotificationListContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  maxWidth: '375px',
  width: '100%',
  margin: '0 auto'
});

export const EmptyState = styled.div({
  padding: '40px 20px',
  textAlign: 'center',
  fontSize: '16px',
  color: '#8E8E93',
  backgroundColor: '#ffffff',
  borderRadius: '16px',
  border: '1px solid rgba(0, 0, 0, 0.05)'
});