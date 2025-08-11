import styled from "@emotion/styled";

export const SliderWrapper = styled.div(({ theme }) => ({
  height: `calc(100vh + env(safe-area-inset-top) + env(safe-area-inset-bottom))`,
  paddingTop: "env(safe-area-inset-top)",
  paddingBottom: "env(safe-area-inset-bottom)",
  boxSizing: "border-box",
  background: theme.colors.systemBackground,
  display: "flex",
  flexDirection: "column"
}));

export const Header = styled.div({
  display: "flex",
  justifyContent: "flex-end",
  padding: "16px"
});

export const LangButton = styled.button({
  background: "none",
  border: "none",
  padding: 0,
  cursor: "pointer",
  width: 32,
  height: 32,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  img: {
    width: 20,
    height: 20
  }
});
