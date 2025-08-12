import styled from "@emotion/styled";
import { animated } from "@react-spring/web";

interface WrapperPageProps {
  shortBottomPadding?: boolean;
}

export const WrapperPage = styled(animated.div)<WrapperPageProps>(
  ({ shortBottomPadding }) => ({
    willChange: "opacity",
    paddingBottom: shortBottomPadding ? "30px" : undefined,
    height: '100%'
  })
);
