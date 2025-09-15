import styled from "@emotion/styled";

export const Wrapper = styled.div(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "15px",
  borderRadius: "10px",
  background: theme.colors.warning100,
  cursor: "pointer",
  fontSize: theme.typography.fontSize.sm,
  fontWeight: theme.typography.fontWeight.medium,
  color: theme.colors.textPrimary,
  gap: "10px",
}));

export const Left = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});
