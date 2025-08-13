import styled from '@emotion/styled'
import { animated } from '@react-spring/web'
import React from 'react'

interface WrapperPageProps {
  shortBottomPadding?: boolean;
  styleExtra?: React.CSSProperties;
}

export const WrapperPage = styled(animated.div)<WrapperPageProps>(
  ({ shortBottomPadding, styleExtra }) => ({
    willChange: "opacity",
    paddingBottom: shortBottomPadding ? "30px" : undefined,
    height: "100%",
    ...styleExtra,
  })
);
