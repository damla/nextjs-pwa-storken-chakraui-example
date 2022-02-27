import type { AppProps } from 'next/app'
import { createTheme, NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

// 2. Call `createTheme` and pass your custom values
const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {} // optional
  }
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      // brand colors
      background: '#1d1d1d',
      text: '#fff',
      // you can also create your own color
      myDarkColor: '#ff4ecd'
      // ...  more colors
    }
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider
      defaultTheme='system'
      attribute='class'
      value={{
        light: lightTheme.className,
        dark: darkTheme.className
      }}
    >
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  )
}

export default MyApp
