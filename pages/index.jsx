import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import SignUp from '../components/SignUp'
import Login from '../components/Login'
import ForgotPassword from '../components/ForgotPassword'
import { ChakraProvider, useDisclosure, Heading } from '@chakra-ui/react'
import { useState } from 'react'
export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [Show, setShow] = useState(null)
  const [user, setUser] = useState(null)

  const getUser = (user) => {
    setUser({ ...user });
    onClose()
  }

  const showModal = (show) => {
    setShow(show)
    onOpen()
  }

  console.log(user);
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
        {Show === 'login' && <Login getUser={getUser} showModal={showModal} isOpen={isOpen} onOpen={onOpen} onClose={onClose} />}
        {Show === 'forgot' && <ForgotPassword showModal={showModal} isOpen={isOpen} onOpen={onOpen} onClose={onClose} />}
        <Heading>
          {user ? `Bem vindo ${user.userName} :D seu e-mail é ${user.email}` : "Cadastre-se ou faça login"}
        </Heading>
      </div>
    </ChakraProvider>
  )
}
