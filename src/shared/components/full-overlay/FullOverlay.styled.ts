import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Backdrop = styled(motion.div)(({ theme }) => ({
  position: "fixed",
  inset: 0,
  width: "100%",
  height: "100%",
  background: theme.colors.systemBackground,
  zIndex: theme.zIndex.modal,
  display: "flex",
  flexDirection: "column",
}));

export const Content = styled(motion.div)<{ $top: number; $bottom: number }>(
  ({ theme, $top, $bottom }) => ({
    position: "relative",
    flex: 1,
    display: "flex",
    flexDirection: "column",

    paddingTop: `${$top + parseInt(theme.spacing.xl)}px`,
    paddingBottom: `${$bottom + parseInt(theme.spacing.md)}px`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    background: "inherit",
  })
);

export const CloseButton = styled("button")<{ $top: number }>(
  ({ theme, $top }) => ({
    position: "absolute",
    top: `${$top + parseInt(theme.spacing.md)}px`,
    right: theme.spacing.md,
    background: "transparent",
    border: "none",
    fontSize: "22px",
    fontWeight: 600,
    cursor: "pointer",
    color: theme.colors.textPrimary,
  })
);
