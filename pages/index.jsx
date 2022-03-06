import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import SignUp from '../components/SignUp'
import { ChakraProvider, useDisclosure } from '@chakra-ui/react'
import { useEffect } from 'react'

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const showModal = (show) => {
    if (show) onOpen()
    else onClose()
  }

  useEffect(() => console.log(isOpen), [isOpen])

  return (
    <ChakraProvider>
      <Head>
        <title>eCards Cadastro</title>
        <meta name="description" content="Tela de cadastro da eCards" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id={styles.app}>
        <NavBar showModal={showModal} />
        <SignUp isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      </div>
    </ChakraProvider>
  )
}
