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

export default function Form() {
  const inputBgColor = useColorModeValue('white', 'none')
  const buttonColorScheme = useColorModeValue('purple', 'blue')

  const calculatePrice = () => {}

  return (
    <FormControl>
      <FormLabel htmlFor='glass'>Cam Şişe</FormLabel>
      <NumberInput size='md' defaultValue={1} max={50} mb='2rem'>
        <NumberInputField id='glass' type='glass' bgColor={inputBgColor} />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <FormLabel htmlFor='plastic'>Plastik Şişe</FormLabel>
      <NumberInput size='md' defaultValue={1} max={50} mb='2rem'>
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
