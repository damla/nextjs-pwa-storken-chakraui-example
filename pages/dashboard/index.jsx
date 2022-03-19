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
import { Form } from '../../components/index'
import Drop from '/public/icons/drop.png'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { useStorken } from '../../data/storken'
import { useEffect } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'

const Dashboard = () => {
  const { data: session, status, loading } = useSession()
  const router = useRouter()
  const [totalPrice] = useStorken('totalPrice')
  const { toggleColorMode } = useColorMode()

  const bg = useColorModeValue('purple.100', 'gray.900')
  const bgContainer = useColorModeValue('purple.50', 'gray.700')
  const color = useColorModeValue('purple.900', 'gray.100')
  const icon = useColorModeValue(<MoonIcon color='purple.900' />, <SunIcon />)
  const borderColor = useColorModeValue('purple.10', 'gray.200')

  useEffect(() => {
    if (!(status === 'authenticated' || loading)) {
      router.push('/')
    }
  }, [status, loading])

  if (loading)
    return (
      <div className='flex min-h-screen items-center justify-center'>
        loading...
      </div>
    )

  // if (status !== 'authenticated') {
  //   router.push('/')
  // }o

  return (
    <div>
      <Head>
        <title>Su Ne Kadar?</title>
        <meta
          name='description'
          content='An application developed to calculate total water price.'
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
            {session && (
              <>
                Signed in as {session.user.name} <br />
                <button onClick={() => signOut()}>Sign out</button>
              </>
            )}

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
                = {totalPrice}&nbsp;₺
              </Heading>
            </Flex>
            <Form />
          </Container>
        </Center>
      </Box>
    </div>
  )
}

export default Dashboard
