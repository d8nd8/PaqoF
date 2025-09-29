import styled from "@emotion/styled";

export const WidgetWrapper = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "14px",
  flex: 1,
  backgroundColor: theme.colors.systemBackground,
}));

interface SwitchableContentProps {
  background?: string;
}

export const SwitchableContent = styled.div<SwitchableContentProps>(({ background }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '45px 14px',
  background: background,
  borderBottomLeftRadius: '13px',
  borderBottomRightRadius: '13px',
  height: '100%',
  maxHeight: '693px',
}));



interface HeaderElementProps {
  level?: number;
}

export const BackButton = styled.button<HeaderElementProps>(({ theme, level }) => ({
  background: "transparent",
  border: "none",
  fontSize: "24px",
  cursor: "pointer",
  padding: "8px",
  color: (level === 3 || level === 5) ? "#FFFFFF" : theme.colors.textPrimary,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "opacity 0.2s ease",
  "&:hover": {
    opacity: 0.7,
  },
}));

export const PageTitle = styled.h1<HeaderElementProps>(({ theme, level }) => ({
  fontSize: "16px",
  fontWeight: 600,
  color: (level === 3 || level === 5) ? "#FFFFFF" : theme.colors.textPrimary,
  textAlign: "center",
  flex: 1,
}));

export const InfoButton = styled.button<HeaderElementProps>(({ theme, level }) => ({
  background: "transparent",
  border: "none",
  cursor: "pointer",
  padding: "8px",
  color: (level === 3 || level === 5) ? "#FFFFFF" : theme.colors.textSecondary,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  width: "44px",
  height: "44px",
  transition: "opacity 0.2s ease",
  "&:hover": {
    opacity: 0.7,
  },
}));

export const SwitcherContainer = styled.div({
  marginBottom: "36px",
});

export const TabContent = styled.div({
  flex: 1,
});

export const PlaceholderBox = styled.div(({ theme }) => ({
  background: theme.colors.error500,
  width: "100%",
  height: "159px",
  marginBottom: "36px",
}));