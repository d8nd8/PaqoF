import styled from "@emotion/styled";

export const OverlayWrapper = styled.div(({ theme }) => ({
  position: "fixed",
  inset: 0,
  zIndex: theme.zIndex.modal,
  display: "flex",
  flexDirection: "column",
  background: theme.colors.systemBackground,
}));

export const Header = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "16px",
});

export const BackButton = styled.button(({ theme }) => ({
  border: "none",
  background: "transparent",
  cursor: "pointer",
  "& svg": {
    width: "24px",
    height: "24px",
    stroke: theme.colors.textPrimary,
  },
}));

export const Title = styled.h2(({ theme }) => ({
  fontSize: "18px",
  fontWeight: 600,
  color: theme.colors.textPrimary,
  margin: 0,
}));

export const Content = styled.div({
  flex: 1,
  padding: "0 16px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "16px",
});

export const SectionTitle = styled.div(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 500,
  color: theme.colors.textSecondary,
}));

export const QRCard = styled.div(({ theme }) => ({
  background: theme.colors.neutral100,
  borderRadius: "12px",
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
  boxShadow: theme.semantic.shadowLight,
}));

export const Address = styled.div(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 500,
  wordBreak: "break-all",
  color: theme.colors.textPrimary,
}));

export const AddressHint = styled.p(({ theme }) => ({
  fontSize: "12px",
  color: theme.colors.textSecondary,
  textAlign: "center",
  margin: "0",
}));

// Кнопка-комиссия
export const CommissionButton = styled.button(({ theme }) => ({
  marginTop: "8px",
  width: "100%",
  height: "50px",
  borderRadius: "10px",
  border: `1px solid ${theme.colors.warning500}`,
  background: "#FFF9E6",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 15px",
  gap: "10px",
  cursor: "pointer",

  "& .left": {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "13px",
    fontWeight: 500,
    color: theme.colors.warning500,
  },

  "& svg": {
    flexShrink: 0,
    color: theme.colors.warning500,
  },
}));

export const BottomActions = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  padding: "16px",
});

export const CopyButton = styled.button(({ theme }) => ({
  background: theme.colors.primary600,
  color: theme.colors.systemElevatedBackground,
  padding: "14px",
  borderRadius: "12px",
  border: "none",
  fontSize: "16px",
  fontWeight: 600,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
}));

export const HomeButton = styled.button(({ theme }) => ({
  background: theme.colors.neutral200,
  color: theme.colors.textPrimary,
  padding: "14px",
  borderRadius: "12px",
  border: "none",
  fontSize: "16px",
  fontWeight: 600,
  cursor: "pointer",
}));

export const Toast = styled.div(({ theme }) => ({
  position: "absolute",
  top: "20px",
  left: "50%",
  transform: "translateX(-50%)",
  background: theme.colors.success500,
  color: theme.colors.systemElevatedBackground,
  padding: "8px 16px",
  borderRadius: "20px",
  fontSize: "14px",
  fontWeight: 500,
}));
