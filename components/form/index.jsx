import {
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Center,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import { useStorken } from '../../store'

export default function Form() {
  const [glassPrice, setGlassPrice] = useStorken('glassPrice')
  const [plasticPrice, setPlasticPrice] = useStorken('plasticPrice')
  const [, setTotalPrice] = useStorken('totalPrice')

  const inputBgColor = useColorModeValue('white', 'none')
  const buttonColorScheme = useColorModeValue('purple', 'blue')

  const handleGlassPriceChange = (value) => {
    setGlassPrice(value * 22.5)
  }

  const handlePlasticPriceChange = (value) => {
    setPlasticPrice(value * 20)
  }

  const calculatePrice = () => {
    setTotalPrice(glassPrice + plasticPrice)
  }

  return (
    <FormControl>
      <FormLabel htmlFor='glass'>Cam Şişe</FormLabel>
      <NumberInput
        size='md'
        max={50}
        mb='2rem'
        onChange={handleGlassPriceChange}
      >
        <NumberInputField id='glass' type='glass' bgColor={inputBgColor} />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <FormLabel htmlFor='plastic'>Plastik Şişe</FormLabel>
      <NumberInput
        size='md'
        max={50}
        mb='2rem'
        onChange={handlePlasticPriceChange}
      >
        <NumberInputField id='plastic' type='plastic' bgColor={inputBgColor} />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Center>
        <Button
          loadingText='Submitting'
          colorScheme={buttonColorScheme}
          variant='solid'
          onClick={calculatePrice}
        >
          ➕&nbsp;Hesapla
        </Button>
      </Center>
    </FormControl>
  )
}
