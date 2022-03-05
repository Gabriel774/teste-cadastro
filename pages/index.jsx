import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import { ChakraProvider } from '@chakra-ui/react'

export default function Home() {
  const showModal = (show) => {
  }

  return (
    <ChakraProvider>
      <Head>
        <title>eCards Cadastro</title>
        <meta name="description" content="Tela de cadastro da eCards" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id={styles.app}>
        <NavBar />
      </div>
    </ChakraProvider>
  )
}
