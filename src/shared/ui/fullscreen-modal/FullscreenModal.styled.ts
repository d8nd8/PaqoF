import styled from 'styled-components';
import { theme } from '@/styles/theme'

export const Overlay = styled.div({
  position: 'fixed',
  inset: 0,
  zIndex: theme.zIndex.modal,
  backgroundColor: theme.colors.systemBackground,
  display: 'flex',
  flexDirection: 'column',
});

export const ModalContent = styled.div({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
});

export const ContentArea = styled.div({
  flex: 1,
  overflowY: 'auto',
});
