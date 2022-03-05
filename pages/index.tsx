import type { NextPage } from 'next'
import Head from 'next/head'
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Spacer,
  StackDivider,
  useColorMode,
  useColorModeValue,
  Wrap,
  WrapItem
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const bg = useColorModeValue('purple.100', 'gray.900')
  const color = useColorModeValue('purple.900', 'gray.100')
  const icon = useColorModeValue(<MoonIcon color='purple.900' />, <SunIcon />)

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
        <Flex as='header'>
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
      </Box>
    </div>
  )
}

export default Home
