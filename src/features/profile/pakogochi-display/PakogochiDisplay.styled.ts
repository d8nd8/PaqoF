import styled from "@emotion/styled";

export const PakogochiContainer = styled.div(({
  position: 'relative',
  width: '100%',
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  overflow: 'hidden',
}));

export const PakogochiImage = styled.img({
  position: 'absolute',
  width: '100%',
  height: 'auto',
  objectFit: 'contain',
  flex: '1 1 auto',
});

export const InfoCard = styled.div(({ theme }) => ({
  position: 'relative',
  background: theme.colors.systemElevatedBackground,
  borderRadius: '16px',
  marginTop: '378px',
  width: '100%',
  maxWidth: '380px',
  zIndex: 2,
  padding: '14px',
}));

export const CardTitle = styled.h3(({ theme }) => ({
  fontSize: '20px',
  lineHeight: '25px',
  fontWeight: 600,
  color: theme.colors.textPrimary,
  textAlign: 'center',
  marginBottom: '10px',
}));

export const ActionsGrid = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
});

export const ActionItem = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: '8px',
});

export const ActionIcon = styled.div(({ theme }) => ({
  width: '50px',
  height: '50px',
  borderRadius: '10px',
  background: theme.colors.primary300,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const ActionText = styled.p({
  fontSize: '13px',
  fontWeight: 500,
  color: '#666',
  margin: 0,
  lineHeight: 1.4,
});