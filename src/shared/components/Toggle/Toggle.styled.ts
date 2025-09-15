import styled from "@emotion/styled";


export const ToggleWrapper = styled.div<{ $checked: boolean }>(({ theme, $checked }) => ({
  width: "51px",
  height: "31px",
  borderRadius: "9999px",
  background: $checked ? theme.colors.primary500 : theme.colors.textQuaternary,
  display: "flex",
  alignItems: "center",
  padding: "2px",
  cursor: "pointer",
  transition: "background 0.2s ease",
}));

export const Circle = styled.div<{ $checked: boolean }>(({ $checked }) => ({
  width: "27px",
  height: "27px",
  borderRadius: "50%",
  background: "#fff",
  transform: $checked ? "translateX(20px)" : "translateX(0)",
  transition: "transform 0.2s ease",
}));