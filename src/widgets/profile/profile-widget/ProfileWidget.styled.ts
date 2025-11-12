import styled from "@emotion/styled";

export const ProfileWrapper = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  background: theme.colors.systemBackground,
  width: "100%",
  minHeight: '100%',
}));

export const ProfileTop = styled.div({
  position: "relative",
  width: "100%",
  height: "24vh",
  minHeight: "180px",
  maxHeight: "260px",
  background: `
  linear-gradient(135deg, #4A9EFF 0%, #6B7EFF 40%, #6FD91A 100%)
  `,
});

export const Username = styled.div({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  fontFamily: "Inter, sans-serif",
  fontSize: "13px",
  fontWeight: 600,
  lineHeight: "18px",
  letterSpacing: "-0.08px",

  color: "#FFFFFF",
  background: "rgba(60, 60, 67, 0.18)",

  padding: "4px 10px",
  borderRadius: "13px",
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)",
});

export const AvatarWrapper = styled.div(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  marginTop: "-50px",
  marginLeft: theme.spacing.lg,
  marginBottom: theme.spacing.lg,
}));

export const Avatar = styled.img(({ theme }) => ({
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  objectFit: "cover",
  border: `3px solid ${theme.colors.systemBackground}`,
  boxSizing: "border-box",
}));

export const AvatarPlaceholder = styled.div(({ theme }) => ({
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  background: "linear-gradient(135deg, #E5E7EB 0%, #F3F4F6 50%, #E5E7EB 100%)",
  border: `3px solid ${theme.colors.systemBackground}`,
  boxSizing: "border-box",

  fontFamily: "Inter, sans-serif",
  fontSize: "32px",
  fontWeight: 600,
  color: "#6B7280",
  letterSpacing: "1px",
}));

export const Content = styled.div(({ theme }) => ({
  padding: theme.spacing.lg,
  paddingBottom: `calc(${theme.spacing.lg})`,
  flex: 1,
}));

export const Section = styled.div(({ theme }) => ({
  marginBottom: theme.spacing.lg,
}));

export const SectionTitle = styled.div(({ theme }) => ({
  fontSize: theme.typography.fontSize.sm,
  fontWeight: theme.typography.fontWeight.medium,
  color: theme.colors.textSecondary,
  margin: "8px 4px",
}));

export const SectionItem = styled.button(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "52px",
  width: "100%",
  padding: "0 16px",
  background: theme.colors.systemElevatedBackground,
  cursor: "pointer",
  border: "none",
  textAlign: "left",
  position: "relative",
  zIndex: 1,
  transition: "all 0.2s ease",

  "&:first-of-type": {
    borderTopLeftRadius: theme.borderRadius.lg,
    borderTopRightRadius: theme.borderRadius.lg,
  },
  "&:last-of-type": {
    borderBottomLeftRadius: theme.borderRadius.lg,
    borderBottomRightRadius: theme.borderRadius.lg,
  },

  "&:focus": {
    outline: "none",
    boxShadow: "none",
  },
  "&:focus-visible": {
    outline: "none",
    boxShadow: "none",
  },
}));

export const IconBox = styled.div(({ theme }) => ({
  width: "28px",
  height: "28px",
  minWidth: "28px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: theme.colors.neutral300,
  borderRadius: "6px",
  marginRight: "10px",

  "& img, & svg": {
    width: 16,
    height: 16,
    fill: theme.colors.neutral950 + " !important",
    stroke: theme.colors.neutral950 + " !important",
    color: theme.colors.neutral950 + " !important",
    flexShrink: 0,
  },
}));

export const ItemText = styled.span({
  fontFamily: "Inter, sans-serif",
  fontSize: "15px",
  fontWeight: 400,
  lineHeight: "100%",
  color: "#000000",
});

export const ItemContent = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

export const Chevron = styled.span({
  fontSize: "18px",
  lineHeight: 1,
  opacity: 0.5,
  color: "#8E8E93",
  fontWeight: "normal",

  WebkitUserSelect: "none",
  userSelect: "none",
  WebkitTapHighlightColor: "transparent",
  pointerEvents: "none",
});

export const LogoutButton = styled.button(({ theme }) => ({
  height: "44px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",

  fontFamily: "Inter, sans-serif",
  fontSize: "15px",
  fontWeight: 400,
  lineHeight: "100%",
  color: "#FF2B27",

  background: theme.colors.systemElevatedBackground,
  borderRadius: theme.borderRadius.lg,
  cursor: "pointer",
  padding: "0 16px",
  marginTop: theme.spacing.sm,
  border: "none",
  position: "relative",
  zIndex: 1,
  transition: "all 0.2s ease",
}));
