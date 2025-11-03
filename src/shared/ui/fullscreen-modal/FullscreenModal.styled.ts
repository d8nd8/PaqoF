import styled from 'styled-components';
import { theme } from '@/styles/theme'

interface OverlayProps {
  $top: number;
  $bottom: number;
}



export const Overlay = styled.div<OverlayProps>(({ $top = 0, $bottom = 0 }) => ({
  position: 'fixed',
  inset: 0,
  zIndex: theme.zIndex.modal,
  backgroundColor: theme.colors.systemBackground,
  display: 'flex',
  flexDirection: 'column',

  paddingTop: `${$top }px`,
  paddingLeft: 14,
  paddingRight: 14,
  paddingBottom: `${$bottom + theme.spacing.lg}px`,
}));

export const ModalContent = styled.div({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
  paddingLeft: '14px',
  paddingRight: '14px',
});

export const ContentArea = styled.div({
  flex: 1,
  overflowY: 'auto',
  padding: '0 14px'
});
