import styled from "@emotion/styled";
import { animated } from "@react-spring/web";

interface WrapperPageProps {
  shortBottomPadding: boolean;
  styleExtra: {
    paddingTop: string;
    paddingBottom: string;
  };
}

export const WrapperPage = styled(animated.div)<WrapperPageProps>(
  ({ styleExtra, shortBottomPadding }) => ({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "var(--app-height)",
    minHeight: "var(--app-height)",
    maxWidth: "100vw",
    position: "relative",
    zIndex: 1,

    overflowY: "auto",
    overflowX: "hidden",
    WebkitOverflowScrolling: "touch",
    overscrollBehaviorY: "contain",

    "&::after": {
      content: '""',
      display: "block",
      height: "1px",
      flexShrink: 0,
    },

    paddingTop: styleExtra.paddingTop,
    paddingBottom: shortBottomPadding
      ? styleExtra.paddingBottom
      : `calc(${styleExtra.paddingBottom})`,

    ['data-scrollable']: 'true',
  })
);