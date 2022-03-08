import {
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Flex,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import { AddIcon, RepeatIcon } from '@chakra-ui/icons'
import { useStorken } from '../../store'

export default function Form() {
  const [glassCount, setGlassCount, resetGlassCount] = useStorken('glassCount')
  const [plasticCount, setPlasticCount, resetPlasticCount] =
    useStorken('plasticCount')
  const [glassPrice, setGlassPrice, resetGlassPrice] = useStorken('glassPrice')
  const [plasticPrice, setPlasticPrice, resetPlasticPrice] =
    useStorken('plasticPrice')
  const [, setTotalPrice, resetTotalPrice] = useStorken('totalPrice')

  const inputBgColor = useColorModeValue('white', 'none')
  const calcButtonColorScheme = useColorModeValue('green', 'green')
  const calcButtonBg = useColorModeValue('green.500', 'green.50')
  const resetButtonColorScheme = useColorModeValue('purple', 'blue')

  const handleGlassPriceChange = (value) => {
    setGlassPrice(value * 22.5)
    setGlassCount(value)
  }

  const handlePlasticPriceChange = (value) => {
    setPlasticPrice(value * 20)
    setPlasticCount(value)
  }

  const calculatePrice = () => {
    setTotalPrice(glassPrice + plasticPrice)
  }

  const reset = () => {
    resetGlassCount()
    resetPlasticCount()
    resetGlassPrice()
    resetPlasticPrice()
    resetTotalPrice()
  }

  return (
    <FormControl>
      <FormLabel htmlFor='glass'>Cam Şişe</FormLabel>
      <NumberInput
        size='md'
        min={0}
        max={50}
        mb='2rem'
        onChange={handleGlassPriceChange}
        value={glassCount}
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
        min={0}
        max={50}
        mb='2rem'
        onChange={handlePlasticPriceChange}
        value={plasticCount}
      >
        <NumberInputField id='plastic' type='plastic' bgColor={inputBgColor} />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Flex alignItems='center' justifyContent='space-around'>
        <Button
          w='125px'
          colorScheme={resetButtonColorScheme}
          variant='solid'
          onClick={reset}
        >
          <RepeatIcon />
          &nbsp;&nbsp;Sıfırla
        </Button>
        <Button
          w='125px'
          colorScheme={calcButtonColorScheme}
          bg={calcButtonBg}
          variant='solid'
          onClick={calculatePrice}
        >
          <AddIcon />
          &nbsp;&nbsp;Hesapla
        </Button>
      </Flex>
    </FormControl>
  )
}
