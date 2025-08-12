import styled from "@emotion/styled";

interface WrapperProps {
  fullscreen?: boolean;
  fullscreenCentered?: boolean;
  noHeaderOffset?: boolean;
}

export const Wrapper = styled.div<WrapperProps>(({ fullscreen, fullscreenCentered, noHeaderOffset }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  ...(fullscreen && {
    minHeight: "100vh",
  }),
  ...(fullscreenCentered && {
    justifyContent: "center",
    alignItems: "center",
  }),
  ...(noHeaderOffset && {
    paddingTop: 0,
  }),
}));

export const WrapperRoot = styled.div({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  height: "100%",
});
