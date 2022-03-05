import type { NextPage } from 'next'
import Head from 'next/head'
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Spacer,
  StackDivider,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const bg = useColorModeValue('purple.100', 'gray.900')
  const bgContainer = useColorModeValue('purple.50', 'gray.700')
  const color = useColorModeValue('purple.900', 'gray.100')
  const icon = useColorModeValue(<MoonIcon color='purple.900' />, <SunIcon />)
  const buttonColorScheme = useColorModeValue('purple', 'blue')
  return (
    <div>
      <Head>
        <title>Su Ne Kadar?</title>
        <meta
          name='description'
          content='An application developed for my mum to calculate total water price.'
        />
      </Head>

      <Box as='main' bg={bg} height='100vh'>
        <Flex as='header' h='10vh'>
          <Box p='10'>
            <Heading size='xl' as='h2' color={color}>
              Su Ne Kadar?
            </Heading>
          </Box>
          <Spacer />
          <Box p='10'>
            <IconButton
              onClick={toggleColorMode}
              aria-label='Change color mode'
              icon={icon}
            />
          </Box>
        </Flex>
        <StackDivider borderColor='gray.200' />
        <Center h='90vh'>
          <Container
            bg={bgContainer}
            border='1px'
            borderColor='gray.200'
            borderRadius='0.375rem'
            p='4rem'
            centerContent
          >
            <Heading size='lg' as='h3' color={color}>
              💧
            </Heading>
            <FormControl>
              <FormLabel htmlFor='glass'>Cam Şişe</FormLabel>
              <NumberInput size='md' defaultValue={1} max={50} mb='2rem'>
                <NumberInputField id='glass' type='glass' />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <FormLabel htmlFor='plastic'>Plastik Şişe</FormLabel>
              <NumberInput size='md' defaultValue={1} max={50} mb='2rem'>
                <NumberInputField id='plastic' type='plastic' />
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
                >
                  ➕&nbsp;Hesapla
                </Button>
              </Center>
            </FormControl>
          </Container>
        </Center>
      </Box>
    </div>
  )
}

export default Home
