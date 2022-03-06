import { Flex, Box, Modal, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, ModalContent, Text, Divider, Button } from '@chakra-ui/react'
import ButtonAltLogin from './ButtonLogin'
import InputLogin from './InputLogin'
import btnData from './data/button'
import inpData from './data/input'
import styles from '../styles/signUp.module.css'

export default function SignUp(props) {

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
                                return <InputLogin
                                    form='login'
                                    type={inp.type}
                                    text={inp.text}
                                    icon={inp.icon}
                                    label={inp.label}

                                />
                            })}
                        </Box>

                        <Box m='10px 0px' w='100%'>
                            <Button w='100%' borderRadius='0px'>
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
                            <span className={styles.link}>Esqueceu sua senha?</span>
                        </Text>
                    </Box>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}