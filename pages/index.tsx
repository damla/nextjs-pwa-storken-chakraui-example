import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import { useTheme as useNextTheme } from 'next-themes'
import {
  Container,
  Button,
  Input,
  Spacer,
  Text,
  Switch,
  useTheme
} from '@nextui-org/react'

const Home: NextPage = () => {
  const { setTheme } = useNextTheme()
  const { isDark, type } = useTheme()

  return (
    <div>
      <Head>
        <title>Su Ne Kadar?</title>
        <meta
          name='description'
          content='An application developed for my mum to calculate total water price.'
        />
        <link
          rel='icon'
          href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💧</text></svg>'
        />
      </Head>

      <Container
        as='main'
        display='flex'
        direction='column'
        justify='center'
        alignItems='center'
        style={{ height: '100vh' }}
      >
        <Switch
          checked={isDark}
          onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        />
        <Spacer />
        {/* <Image src='/logo.svg' alt='Vercel Logo' width={200} height={200} /> */}
        <Spacer />
        <Text h1>Su Ne Kadar?</Text>
        <Spacer />
        <Input clearable labelPlaceholder='Type something' />
        <Spacer />
        <Button>Click Me</Button>
      </Container>
    </div>
  )
}

export default Home
