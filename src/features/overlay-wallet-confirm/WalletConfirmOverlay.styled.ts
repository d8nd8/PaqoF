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
  justifyContent: "center",
  position: "relative",
  paddingTop: "70px",
  paddingBottom: "10px",
});

export const BackButton = styled.button(({ theme }) => ({
  position: "absolute",
  left: "16px",
  border: "none",
  background: "transparent",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "21px",
  "& svg": {
    width: "24px",
    height: "24px",
    display: "block",
    stroke: theme.colors.textPrimary,
  },
}));

export const Title = styled.h2(({ theme }) => ({
  flex: 1,
  textAlign: "center",
  fontSize: "16px",
  fontWeight: 600,
  lineHeight: "21px",
  letterSpacing: "-0.31px",
  color: theme.colors.textPrimary,
  margin: 0,
}));

export const Content = styled.div({
  flex: 1,
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export const SectionTitle = styled.div(({ theme }) => ({
  fontSize: "15px",
  lineHeight: "20px",
  fontWeight: theme.typography.fontWeight.semibold,
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

export const CardTitle = styled.div(({ theme }) => ({
  fontSize: "13px",
  lineHeight: "18px",
  fontWeight: theme.typography.fontWeight.normal,
  color: theme.colors.textPrimary,
  marginBottom: "-10px",
}));

export const CardLabel = styled.div(({ theme }) => ({
  fontSize: "13px",
  lineHeight: "18px",
  fontWeight: theme.typography.fontWeight.normal,
  color: theme.colors.textSecondary,
}));


export const AmountValue = styled.div(({ theme }) => ({
  fontSize: "34px",
  fontWeight: theme.typography.fontWeight.bold,
  lineHeight: "41px",
  letterSpacing: "0.4px",
  color: theme.colors.textPrimary,
  display: "flex",
  alignItems: "baseline",
  gap: "4px",
}));

export const AmountSub = styled.div(({ theme }) => ({
  fontSize: "13px",
  fontWeight: theme.typography.fontWeight.normal,
  letterSpacing: "-0.08px",
  color: theme.colors.textPrimary,
}));


export const AmountRow = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const AddressValue = styled.div(({ theme }) => ({
  fontSize: "14px",
  lineHeight: "20px",
  wordBreak: "break-all",
  color: theme.colors.textPrimary,
}));

export const InfoText = styled.div<{ isTotal?: boolean }>(({ theme, isTotal }) => ({
  fontSize: "13px",
  lineHeight: "18px",
  fontWeight: isTotal ? theme.typography.fontWeight.bold : theme.typography.fontWeight.semibold,
  color: theme.colors.textPrimary,
}));

export const InputWrapper = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  borderRadius: "13px",
  padding: "10px",
  background: theme.colors.neutral100,
}));

export const AddressInput = styled.input(({ theme }) => ({
  flex: 1,
  border: "none",
  outline: "none",
  fontSize: theme.typography.fontSize.md,
  color: theme.colors.textPrimary,
  background: "transparent",
}));

export const InsertButton = styled.button(({ theme }) => ({
  fontSize: "11px",
  lineHeight: "13px",
  fontWeight: 600,
  letterSpacing: "0.06px",
  color: theme.colors.textPrimary,

  background: theme.colors.textQuaternary,
  borderRadius: "6px",
  padding: "5px 10px",
  height: "24px",
  border: "none",
  cursor: "pointer",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const Spinner = styled.div(({ theme }) => ({
  border: "3px solid rgba(255, 255, 255, 0.3)",
  borderTop: `3px solid ${theme.colors.textPrimary}`,
  borderRadius: "50%",
  width: "18px",
  height: "18px",
  animation: "spin 1s linear infinite",
  "@keyframes spin": {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  },
}));

export const BottomButton = styled.button(({ theme }) => ({
  margin: "0 16px 40px",
  height: "44px",
  borderRadius: "10px",
  background: theme.colors.primary500,
  color: theme.colors.textPrimary,
  fontSize: "15px",
  fontWeight: 600,
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "opacity 0.2s ease",
  "&:hover": { opacity: 0.9 },
  "&:active": { transform: "scale(0.98)" },
}));


export const BottomSection = styled.div<{ $insetBottom?: number }>(
  ({ $insetBottom = 0 }) => ({
    padding: `30px 14px calc(16px + ${$insetBottom}px)`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  })
);

export const MainButton = styled.button<{ disabled?: boolean }>(({ theme, disabled }) => ({
  width: "100%",
  height: "44px",
  background: disabled ? theme.colors.neutral300 : theme.colors.primary500,
  color: theme.colors.textPrimary,
  border: "none",
  borderRadius: "10px",
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "20px",
  cursor: disabled ? "not-allowed" : "pointer",
  opacity: disabled ? 0.7 : 1,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));