import type { NextPage } from 'next'
import Head from 'next/head'
import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  IconButton,
  Spacer,
  StackDivider,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import Form from '../components/form'

const Home: NextPage = () => {
  const { toggleColorMode } = useColorMode()

  const bg = useColorModeValue('purple.100', 'gray.900')
  const bgContainer = useColorModeValue('purple.50', 'gray.700')
  const color = useColorModeValue('purple.900', 'gray.100')
  const icon = useColorModeValue(<MoonIcon color='purple.900' />, <SunIcon />)
  const borderColor = useColorModeValue('purple.10', 'gray.200')
  return (
    <div>
      <Head>
        <title>Su Ne Kadar?</title>
        <meta
          name='description'
          content='An application developed for my mum to calculate total water price.'
        />
      </Head>

      <Box as='main' bg={bg} h='100vh' maxH='100vh'>
        <Flex as='header' h='10vh' maxH='10vh'>
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
        <StackDivider borderColor={borderColor} />
        <Center height='90vh' minH='90vh'>
          <Container
            bg={{ sm: 'none', md: bgContainer }}
            border={{ sm: '0', md: '1px' }}
            borderColor='gray.200'
            borderRadius='0.375rem'
            p='4rem'
            centerContent
          >
            <Heading size='xl' as='h1' color={color} pb='2rem'>
              💧
            </Heading>
            <Form />
          </Container>
        </Center>
      </Box>
    </div>
  )
}

export default Home
