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
  // Input,
  // InputGroup,
  // InputLeftElement,
  useColorModeValue
} from '@chakra-ui/react'
import { RepeatIcon, AddIcon } from '@chakra-ui/icons'
import { useStorken } from '../../data/storken'
import { useActions } from '../../hooks/useActions'

export default function Form() {
  const [glassCount, setGlassCount, resetGlassCount] = useStorken('glassCount')
  const [plasticCount, setPlasticCount, resetPlasticCount] =
    useStorken('plasticCount')
  const [, , resetTotalPrice] = useStorken('totalPrice')
  const totalPriceActions = useActions('totalPrice')
  const inputBgColor = useColorModeValue('white', 'none')

  const handleGlassCountChange = (value) => {
    setGlassCount(value)
  }

  const handlePlasticCountChange = (value) => {
    setPlasticCount(value)
  }

  const resetValues = () => {
    resetGlassCount()
    resetPlasticCount()
    resetTotalPrice()
  }

  return (
    <FormControl>
      <Flex
        alignItems='center'
        justifyContent='space-between'
        w='100'
        mb='0.5rem'
      >
        <FormLabel htmlFor='glass' onClick={() => console.log('test')}>
          Cam Şişe
        </FormLabel>
        {/* <InputGroup w='100'>
          <InputLeftElement color='purple'>₺</InputLeftElement>
          <Input
            placeholder='22.5'
            htmlSize={3}
            w='auto'
            bg='white'
            type='number'
          />
        </InputGroup> */}
      </Flex>
      <NumberInput
        size='md'
        min={0}
        max={50}
        mb='2rem'
        onChange={handleGlassCountChange}
        value={glassCount}
      >
        <NumberInputField id='glass' type='glass' bgColor={inputBgColor} />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Flex
        alignItems='center'
        justifyContent='space-between'
        w='100'
        mb='0.5rem'
      >
        <FormLabel htmlFor='plastic' onClick={() => console.log('test')}>
          Plastik Şişe
        </FormLabel>
        {/* <InputGroup w='100'>
          <InputLeftElement color='purple'>₺</InputLeftElement>
          <Input
            placeholder='20'
            htmlSize={3}
            w='auto'
            bg='white'
            type='number'
          />
        </InputGroup> */}
      </Flex>
      <NumberInput
        size='md'
        min={0}
        max={50}
        mb='2rem'
        onChange={handlePlasticCountChange}
        value={plasticCount}
      >
        <NumberInputField id='plastic' type='plastic' bgColor={inputBgColor} />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Flex alignItems='center' justifyContent='space-around'>
        <Button w='125px' variant='reset' onClick={resetValues}>
          <RepeatIcon />
          &nbsp;&nbsp;Sıfırla
        </Button>
        <Button
          w='125px'
          variant='calculate'
          onClick={() => totalPriceActions.setTotal()}
        >
          <AddIcon />
          &nbsp;&nbsp;Hesapla
        </Button>
      </Flex>
    </FormControl>
  )
}
