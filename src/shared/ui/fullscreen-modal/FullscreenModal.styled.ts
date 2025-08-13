import styled from 'styled-components';
import { theme } from '@/styles/theme'

interface OverlayProps {
  $top: number;
  $bottom: number;
}

export const Overlay = styled.div<OverlayProps>(({ $top, $bottom }) => ({
  position: 'fixed',
  inset: 0,
  zIndex: theme.zIndex.modal,
  backgroundColor: theme.colors.systemBackground,
  display: 'flex',
  flexDirection: 'column',
  paddingTop: `${$top + 60}px`,
  paddingBottom: `${$bottom}px`,
}));

export const ModalContent = styled.div({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '14px'
});

export const ContentArea = styled.div({
  flex: 1,
  overflowY: 'auto',
  padding: '0 14px'
});
