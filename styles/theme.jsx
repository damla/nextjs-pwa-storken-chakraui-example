import { extendTheme } from '@chakra-ui/react'
import { ButtonStyles as Button } from './components/ButtonStyles'

const config = {
  initialColorMode: 'light',
  components: {
    Button
  }
}

export const theme = extendTheme(config)
