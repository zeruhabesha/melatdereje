'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

type NextThemesProviderProps = React.ComponentProps<typeof NextThemesProvider>

interface ThemeProviderProps extends Omit<NextThemesProviderProps, 'children'> {
  children: React.ReactNode
}

export function ThemeProvider({
  children,
  attribute = 'class',
  defaultTheme = 'light',
  enableSystem = true,
  disableTransitionOnChange = true,
  ...props
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      disableTransitionOnChange={disableTransitionOnChange}
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}
