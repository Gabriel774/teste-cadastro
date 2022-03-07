import { Flex, Box, Modal, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, ModalContent, Text, Divider, Button } from '@chakra-ui/react'
import ButtonAltLogin from './ButtonLogin'
import InputLogin from './InputLogin'
import btnData from './data/button'
import inpData from './data/input'
import styles from '../styles/signUp.module.css'
import { useState } from 'react'
import axios from 'axios'

export default function SignUp(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleChange = (inp, inpValue) => {
        switch (inp) {
            case 'email': setEmail(inpValue)
                break
            case 'password': setPassword(inpValue)
        }
    }

    const submitData = async () => {
        if (email === '' || password === '') return alert("Preencha todos os campos!")
        if (!email.includes("@")) return alert("E-mail inválido")
        let data = { email, password }
        const response = await axios.post("https://projeto-cadastro774.herokuapp.com/auth/login", data)
        if (response.status == '404') return alert("Usuário não encontrado")
        props.getUser(response.data.user)

    }

    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
            <ModalOverlay />
            <ModalContent bg='gray.700' color='white'>
                <ModalHeader>Fazer login</ModalHeader>
                <ModalCloseButton
                    bg='whiteAlpha.900'
                    color='gray.700'
                    _hover={{ background: 'whiteAlpha.700' }}
                    _active={{ background: 'whiteAlpha.600' }}
                />
                <Divider borderColor='#556896' />
                <ModalBody>
                    <Flex direction='column' justify='center' align='center'>
                        <Box m='10px 0px'>
                            <Text color='whiteAlpha.600'>
                                Não possui uma conta? <span
                                    className={styles.link}
                                    onClick={() => props.showModal('signUp')}
                                >Cadastre-se Agora</span>
                            </Text>
                        </Box>

                        <Box m='10px 0px' w='100%'>
                            {btnData.map((btn, i) => {
                                return <ButtonAltLogin
                                    src={btn.src}
                                    name={btn.name}
                                    text={btn.text}
                                    alt={btn.alt}
                                    bg={btn.bg}
                                    hover={btn.hover}
                                    active={btn.active}
                                    color={btn.color}
                                    form='login'
                                    width={btn.width}
                                    key={i}
                                />
                            })}
                        </Box>

                        <Box m='10px 0px' w='100%'>
                            <Text className={styles.textWithLine}>
                                Ou
                            </Text>
                        </Box>

                        <Box m='10px 0px' w='100%'>
                            {inpData.map((inp, i) => {
                                let value = null
                                switch (inp.type) {
                                    case 'email': value = email
                                        break
                                    case 'password': value = password
                                }

                                return <InputLogin
                                    form='login'
                                    type={inp.type}
                                    text={inp.text}
                                    icon={inp.icon}
                                    label={inp.label}
                                    key={i}
                                    value={value}
                                    setValue={inp.type}
                                    handleChange={handleChange}
                                />
                            })}
                        </Box>

                        <Box m='10px 0px' w='100%'>
                            <Button
                                w='100%'
                                borderRadius='0px'
                                onClick={() => submitData()}
                                disabled={!email || !password}
                            >
                                <Text color='blackAlpha.800'>
                                    Entrar
                                </Text>
                            </Button>
                        </Box>
                    </Flex>
                </ModalBody>
                <ModalFooter textAlign='center'>
                    <Box m='0px 25px' w='100%'>
                        <Text>
                            <span
                                className={styles.link}
                                onClick={() => props.showModal('forgot')}
                            >
                                Esqueceu sua senha?
                            </span>
                        </Text>
                    </Box>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}