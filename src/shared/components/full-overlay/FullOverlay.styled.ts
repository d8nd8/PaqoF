import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Backdrop = styled(motion.div)(
  ({ theme }) => ({
    position: "fixed",
    inset: 0,
    width: "100%",
    height: "100%",
    background: theme.colors.systemBackground,
    zIndex: theme.zIndex.modal,
    display: "flex",
    flexDirection: "column",
  })
);

export const Content = styled(motion.div)<{ $top: number; $bottom: number }>(
  ({ $top, $bottom }) => ({
    position: "relative",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    padding: "20px 16px",
    background: "inherit",
    marginTop: `${$top}px`,
    marginBottom: `${$bottom}px`,
    borderRadius: "12px 12px 0 0",
    boxShadow: "0 -2px 16px rgba(0,0,0,0.15)",
  })
);

export const CloseButton = styled("button")<{ $top: number }>(
  ({ theme, $top }) => ({
    position: "absolute",
    top: `${$top + 8}px`,
    right: "12px",
    background: "transparent",
    border: "none",
    fontSize: "22px",
    color: theme.colors.textPrimary,
    cursor: "pointer",
  })
);
