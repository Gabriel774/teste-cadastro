import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import SignUp from '../components/SignUp'
import Login from '../components/Login'
import ForgetPassword from '../components/ForgetPassword'
import { ChakraProvider, useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [Show, setShow] = useState(null)

  const showModal = (show) => {
    setShow(show)
    onOpen()
  }

  return (
    <ChakraProvider>
      <Head>
        <title>E-Cards Cadastro</title>
        <meta name="description" content="Tela de cadastro da E-Cards" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id={styles.app}>
        <NavBar showModal={showModal} />
        {Show === 'signUp' && <SignUp showModal={showModal} isOpen={isOpen} onOpen={onOpen} onClose={onClose} />}
        {Show === 'login' && <Login showModal={showModal} isOpen={isOpen} onOpen={onOpen} onClose={onClose} />}
        {Show === 'forget' && <ForgetPassword showModal={showModal} isOpen={isOpen} onOpen={onOpen} onClose={onClose} />}
      </div>
    </ChakraProvider>
  )
}
