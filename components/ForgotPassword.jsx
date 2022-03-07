import { Flex, Box, Modal, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody, ModalContent, Text, Divider, Button } from '@chakra-ui/react'
import InputLogin from './InputLogin'
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

    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
            <ModalOverlay />
            <ModalContent bg='gray.700' color='white'>
                <ModalHeader>Esqueceu a senha?</ModalHeader>
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
                                Lembra da sua senha? <span
                                    className={styles.link}
                                    onClick={() => props.showModal('login')}
                                >Entrar Agora</span>
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
                                    form='forgot'
                                    type={inp.type}
                                    text={inp.text}
                                    icon={inp.icon}
                                    label={inp.label}
                                    alt={props.alt}
                                    key={i}
                                    value={value}
                                    setValue={inp.type}
                                    handleChange={handleChange}
                                />
                            })}
                        </Box>

                        <Box m='15px 0px' w='100%'>
                            <Button
                                w='100%'
                                borderRadius='0px'
                                disabled={!email || !password}
                            >
                                <Text color='blackAlpha.800'>
                                    Redefinir Senha
                                </Text>
                            </Button>
                        </Box>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}