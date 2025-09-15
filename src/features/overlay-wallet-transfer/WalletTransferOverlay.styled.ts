import styled from "@emotion/styled";

export const OverlayWrapper = styled.div(({ theme }) => ({
  position: "fixed",
  inset: 0,
  background: theme.colors.systemBackground,
  display: "flex",
  flexDirection: "column",
  zIndex: theme.zIndex.modal,
}));

export const Header = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "16px",
});

export const BackButton = styled.button({
  border: "none",
  background: "transparent",
  cursor: "pointer",
});

export const Title = styled.h2(({ theme }) => ({
  fontSize: theme.typography.fontSize.lg,
  fontWeight: theme.typography.fontWeight.semibold,
  margin: 0,
  color: theme.colors.textPrimary,
}));

export const Content = styled.div({
  flex: 1,
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export const SectionTitle = styled.div(({ theme }) => ({
  fontSize: theme.typography.fontSize.sm,
  fontWeight: theme.typography.fontWeight.medium,
  color: theme.colors.textPrimary,
}));


export const Card = styled.div(({ theme }) => ({
  width: "100%",
  borderRadius: "13px",
  padding: "14px",
  background: theme.colors.neutral100,
  display: "flex",
  flexDirection: "column",
  gap: "14px",
}));

export const AmountRow = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const AmountValue = styled.div(({ theme }) => ({
  fontSize: "20px",
  fontWeight: theme.typography.fontWeight.bold,
}));

export const AmountSub = styled.div(({ theme }) => ({
  fontSize: theme.typography.fontSize.sm,
  color: theme.colors.textSecondary,
}));

export const PresetRow = styled.div({
  display: "flex",
  gap: "8px",
});

export const PresetButton = styled.button(({ theme }) => ({
  borderRadius: "8px",
  border: `1px solid ${theme.colors.neutral300}`,
  background: theme.colors.neutral100,
  fontSize: theme.typography.fontSize.sm,
  padding: "5px 10px",
  cursor: "pointer",
}));

export const InputWrapper = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  borderRadius: "13px",
  padding: "10px",
  background: theme.colors.neutral100,
  border: `1px solid ${theme.colors.systemElevatedBackground}`,
}));

export const AddressInput = styled.input(({ theme }) => ({
  flex: 1,
  border: "none",
  outline: "none",
  fontSize: theme.typography.fontSize.md,
  color: theme.colors.textPrimary,
  background: "transparent",
}));

export const IconButton = styled.button({
  border: "none",
  background: "transparent",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});


export const BottomButton = styled.button(({ theme }) => ({
  margin: "16px",
  height: "44px",
  borderRadius: "8px",
  background: theme.colors.primary600,
  color: theme.colors.systemElevatedBackground,
  fontSize: theme.typography.fontSize.md,
  fontWeight: theme.typography.fontWeight.semibold,
  border: "none",
  cursor: "pointer",
}));
