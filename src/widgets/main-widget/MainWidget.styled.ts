import styled from "@emotion/styled";

export const Wrapper = styled.div(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  background: theme.colors.systemBackground,
  minHeight: '100vh',
}));