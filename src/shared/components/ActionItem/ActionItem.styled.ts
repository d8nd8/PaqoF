import styled from "@emotion/styled";
import type { ActionVariant } from '@/shared/components/ActionItem/ActionItem.types'

export const ActionItemContainer = styled.div({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "4px",
});

export const ActionButton = styled.button<{ variant?: ActionVariant }>(
  ({ theme, variant = "default" }) => {
    const bgMap = {
      default: theme.colors.systemBackground,
      secondary: theme.colors.systemElevatedBackground,
      primary: theme.colors.neutral950,
    };

    const colorMap = {
      default: theme.colors.neutral950,
      secondary: theme.colors.neutral950,
      primary: theme.colors.neutral100,
    };

    return {
      width: "100%",
      backgroundColor: bgMap[variant],
      color: colorMap[variant],
      border: "none",
      borderRadius: "12px",
      padding: "10px 12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "all 0.2s ease",
      outline: "none",

      "&:focus": {
        outline: "none",
      },

      "&:hover": {
        backgroundColor:
          variant === "primary"
            ? theme.colors.neutral800
            : variant === "secondary"
              ? theme.colors.neutral200
              : theme.colors.textQuaternary,
      },
    };
  }
);

export const ActionIcon = styled.div({
  width: "24px",
  height: "24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "inherit",

  "& svg": {
    width: "100%",
    height: "100%",
    fill: "currentColor",
  },
});

export const ActionLabelText = styled.span(({ theme }) => ({
  fontSize: "12px",
  fontWeight: "400",
  color: theme.colors.textSecondary,
  lineHeight: "13px",
  textAlign: "center",
}));
