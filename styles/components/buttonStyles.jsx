import { mode } from '@chakra-ui/theme-tools'

export const ButtonStyles = {
  baseStyle: {},
  sizes: {},
  variants: {
    calculate: (props) => ({
      bg: mode('green.500', 'green.100')(props),
      color: mode('white', 'black')(props)
    }),
    reset: (props) => ({
      bg: mode('purple.500', 'blue.100')(props),
      color: mode('white', 'black')(props)
    })
  },
  defaultProps: {}
}
