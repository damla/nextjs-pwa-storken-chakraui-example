import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS={true}>
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
        />
        <meta name='description' content='Description' />
        <meta name='keywords' content='Keywords' />
        <title>Su ne kadar?</title>
        <link rel='manifest' href='/manifest.json' />
        <link
          href='/icons/favicon-16x16.png'
          rel='icon'
          type='image/png'
          sizes='16x16'
        />
        <link
          href='/icons/favicon-32x32.png'
          rel='icon'
          type='image/png'
          sizes='32x32'
        />
        <link rel='apple-touch-icon' href='/icons/apple-touch-icon.png'></link>
        <meta name='theme-color' content='#E9D8FD' />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
