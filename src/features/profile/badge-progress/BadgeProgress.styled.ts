
import styled from '@emotion/styled';

export const ProgressCard = styled.div(({ theme }) => ({
  background: theme.colors.systemElevatedBackground,
  borderRadius: theme.borderRadius.lg,
  padding: '14px',
}));

export const ProgressHeader = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '8px',
});

export const ProgressLabel = styled.div(({ theme }) => ({
  fontSize: "15px",
  fontWeight: 600,
  color: theme.colors.textPrimary,
}));

export const UpgradeInfo = styled.div({
  display: 'flex',
  alignItems: 'center',
});

export const UpgradeText = styled.span(({ theme }) => ({
  fontSize: "12px",
  fontWeight: 400,
  color: theme.colors.textSecondary,
  marginRight: '4px',
}));

export const UpgradeAmount = styled.span(({ theme }) => ({
  fontSize: "13px",
  fontWeight: 600,
  color: theme.colors.textPrimary,
}));

export const ProgressBarContainer = styled.div({
  width: '100%',
});

export const ProgressBar = styled.div({
  width: "100%",
  height: "8px",
  background: "#E5E5E7",
  borderRadius: "4px",
  position: "relative",
});

export const ProgressFill = styled.div<{ progress: number }>(({ progress }) => ({
  width: `${progress}%`,
  height: "100%",
  background: "#BFFF00",
  borderRadius: "4px",
  transition: 'width 0.3s ease',
}));