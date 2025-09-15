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

export const Content = styled(motion.div)({
  position: "relative",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  padding: "20px 16px",
  background: "inherit",
});

export const CloseButton = styled.button(({ theme }) => ({
  position: "absolute",
  top: theme.spacing.lg,
  right: theme.spacing.lg,
  background: "transparent",
  border: "none",
  fontSize: "22px",
  fontWeight: 600,
  cursor: "pointer",
  color: theme.colors.textPrimary,
}));
