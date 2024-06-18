'use client'

<<<<<<< Updated upstream
import { ThemeProvider } from "next-themes"
import React from "react"

export function Providers({ children }: {children: React.ReactNode }){
    return <ThemeProvider attribute="class" defaultTheme="system" enableSystem>{children}</ThemeProvider>
=======
import {NextUIProvider} from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from "next-themes";

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  )
>>>>>>> Stashed changes
}