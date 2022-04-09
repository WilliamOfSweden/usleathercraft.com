import React, { ReactNode } from 'react'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import { theme } from '../../styles/theme'
import { Header } from './header/'
import { Footer } from './footer/'

interface Props {
  children: ReactNode
}

export const Layout = ({ children }: Props) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Header />
    <main>{children}</main>
    <Footer />
  </ThemeProvider>
)
