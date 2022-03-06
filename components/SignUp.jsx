import { Flex, Box, Modal, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, ModalContent, Text, Divider, Button } from '@chakra-ui/react'
import ButtonAltLogin from './ButtonLogin'
import InputLogin from './InputLogin'
import btnData from './data/button'
import inpData from './data/input'
import styles from '../styles/signUp.module.css'
import Image from 'next/image'
import loginIcon from '../public/assets/img/login.png'

export default function SignUp(props) {

    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
            <ModalOverlay />
            <ModalContent bg='gray.700' color='white'>
                <ModalHeader>Criar Conta</ModalHeader>
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
                                Já possui uma conta? <span className={styles.link}>Entrar Agora</span>
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
                                    type={true}
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
                                return <InputLogin
                                    form='register'
                                    type={inp.type}
                                    text={inp.text}
                                    icon={inp.icon}
                                    label={inp.label}

                                />
                            })}
                        </Box>
                        <Box m='10px 0px' w='100%'>
                            <Button w='100%'>
                                <Text mr='5px' color='blackAlpha.800'>
                                    Comece Agora
                                </Text>
                                <Image width={20} height={20} src={loginIcon} />
                            </Button>
                        </Box>
                    </Flex>
                </ModalBody>
                <ModalFooter>

                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}