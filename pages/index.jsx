import Image from 'next/image'
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
import Form from '../components/form'
import Drop from '../public/icons/drop.png'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { useStorken } from '../store'

const Home = () => {
  const { toggleColorMode } = useColorMode()
  const [totalPrice] = useStorken('totalPrice')

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
          content='An application developed for to calculate total water price.'
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
            <Flex mb='2rem' alignItems='center' justify='center'>
              <Image src={Drop} alt='drop icon' width='50' height='50' />
              <Heading size='xl' as='h3' color={color}>
                = {totalPrice} ₺
              </Heading>
            </Flex>
            <Form />
          </Container>
        </Center>
      </Box>
    </div>
  )
}

export default Home
