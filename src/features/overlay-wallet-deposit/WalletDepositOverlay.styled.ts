// WalletDepositOverlay.styled.ts
import styled from "@emotion/styled";
import { theme } from '@/styles/theme'

export const OverlayWrapper = styled.div(({ theme }) => ({
  position: "fixed",
  inset: 0,
  zIndex: theme.zIndex.modal,
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing.lg ,
  background: theme.colors.systemBackground,
}));

export const HeaderWrapper = styled.div({
  width: "100%",
  padding: "0 20px",
  boxSizing: "border-box",
});

export const Header = styled.div({
  display: "flex",
  alignItems: "center",
  paddingBottom: "25px",
  paddingLeft: "16px",
  paddingRight: "16px",
  position: "relative",
});


export const BackButton = styled.button(({ theme }) => ({
  position: "absolute",
  left: "16px",
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
  flex: 1,
  textAlign: "center",
  fontSize: "16px",
  fontWeight: 600,
  lineHeight: "21px",
  letterSpacing: "-0.31px",
  color: theme.colors.textPrimary,
  margin: 0,
}));

export const ContentWrapper = styled.div(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
}));


export const Content = styled.div({
  flex: 1,
  padding: "0 16px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  overflowY: "auto",
});

export const SectionTitle = styled.div(({ theme }) => ({
  fontSize: "15px",
  fontWeight: 600,
  lineHeight: "20px",
  letterSpacing: "-0.23px",
  color: theme.colors.textPrimary,
}));

export const CryptoCard = styled.div<{ $disabled?: boolean }>(({ theme, $disabled }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "66px",
  padding: "14px",
  borderRadius: "13px",
  background: theme.colors.systemElevatedBackground,
  cursor: $disabled ? "default" : "pointer",
  opacity: $disabled ? 0.6 : 1,

  "& > .left": {
    display: "flex",
    alignItems: "center",
    gap: "10px",

    "& svg": {
      width: "38px",
      height: "38px",
    },

    "& .info": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: "2px",

      "& .name": {
        fontSize: "13px",
        fontWeight: 600,
        lineHeight: "18px",
        color: theme.colors.textPrimary,
      },

      "& .amount": {
        fontSize: "12px",
        fontWeight: 400,
        lineHeight: "16px",
        color: theme.colors.textSecondary,
      },
    },
  },

  "& > .right": {
    display: $disabled ? "none" : "flex",
    alignItems: "center",
    gap: "8px",

    "& svg": {
      width: "20px",
      height: "20px",
      stroke: theme.colors.textTertiary,
    },
  },
}));

export const NetworkOption = styled.button<{ $selected?: boolean }>(
  ({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "66px",
    width: "100%",
    padding: "0 16px",
    borderRadius: "13px",
    background: theme.colors.systemElevatedBackground,
    border: "none",
    cursor: "pointer",
    transition: "background 0.2s ease",

    "&:hover": { background: theme.semantic.hover },
    "&:active": { background: theme.semantic.active },

    "& .left": {
      display: "flex",
      alignItems: "flex-start",
      gap: "10px",

      "& svg": {
        width: "38px",
        height: "38px",
        flexShrink: 0,
      },

      "& .info": {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "2px",

        "& .name": {
          fontSize: "13px",
          fontWeight: 600,
          lineHeight: "18px",
          color: theme.colors.textPrimary,
        },

        "& .commission": {
          fontSize: "12px",
          fontWeight: 400,
          lineHeight: "16px",
          color: theme.colors.textSecondary,
        },
      },
    },

    "& .right": {
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
  })
);


export const RadioWrapper = styled.div<{ $active?: boolean }>(
  ({ theme, $active }) => ({
    width: "20px",
    height: "20px",
    borderRadius: "9999px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: $active ? theme.colors.primary500 : theme.colors.textQuaternary,
    color: $active ? theme.colors.textPrimary : "transparent",
    transition: theme.transition.fast,

    "& svg": {
      width: "14px",
      height: "14px",
      strokeWidth: 2,
    },
  })
);

export const NetworkLeft = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  fontWeight: 500,
  fontSize: "16px",
});

export const NetworkRight = styled.div({
  display: "flex",
  alignItems: "center",
  fontSize: "13px",
});

export const BottomSection = styled.div<{ $insetBottom?: number }>(({ $insetBottom = 0 }) => ({
  padding: `30px 14px calc(16px + ${$insetBottom}px)`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const MainButton = styled.button(({ theme }) => ({
  width: "100%",
  height: "44px",
  background: theme.colors.primary500,
  color: theme.colors.textPrimary,
  border: "none",
  borderRadius: "10px",
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "20px",
  cursor: "pointer",
}));