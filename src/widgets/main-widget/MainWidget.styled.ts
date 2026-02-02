import styled from '@emotion/styled'

export const Wrapper = styled.div(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: 14,
  background: theme.colors.systemBackground,
  minHeight: '100vh',
}))

export const CryptoWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
  padding: '0 14px',
}))
