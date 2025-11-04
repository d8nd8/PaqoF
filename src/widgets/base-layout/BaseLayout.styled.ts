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
    height: "100%",
    maxWidth: "100vw",
    overflowY: "auto",
    overflowX: "hidden",
    WebkitOverflowScrolling: "touch",
    overscrollBehavior: "contain",
    position: "relative",
    zIndex: 1,
    paddingBottom: shortBottomPadding
      ? styleExtra.paddingBottom
      : `calc(${styleExtra.paddingBottom})`,
    paddingTop: styleExtra.paddingTop,
  })
);