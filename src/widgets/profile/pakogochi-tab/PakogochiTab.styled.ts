import styled from "@emotion/styled";

export const PakogochiWrapper = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  minHeight: "400px",
  gap: theme.spacing.lg,
}));

export const PlaceholderText = styled.div(({ theme }) => ({
  fontSize: "16px",
  color: theme.colors.textSecondary,
}));