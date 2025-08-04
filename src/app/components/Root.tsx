import { QueryClientProvider } from '@tanstack/react-query'


import { App } from './App'
import {queryClient} from "../../shared/constants/queryClient";
import { theme } from '../../styles/theme'
import { ThemeProvider } from '@emotion/react'

/**
 * The application entry point
 * Wrapps the main App in providers
 */
export const Root = () => {
  return (
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
         <App />
        </ThemeProvider>
      </QueryClientProvider>
  )
}
