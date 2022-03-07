import { Heading, Box, Flex, Button } from '@chakra-ui/react'

export default function NavBar(props) {
    return (
        <Box position='absolute' top='0' w='100%' h='55px' bg='gray.700' color='white'>
            <Flex
                ml="5%"
                mr="5%"
                h="100%"
                direction="row"
                justify="space-between"
                align="center"
            >
                <Heading as='h1'>E-Cards</Heading>

                <Box>
                    <Button onClick={() => props.showModal('signUp')} mr="20px" color="gray.900">Criar Conta</Button>
                    <Button onClick={() => props.showModal('login')} color="gray.900">Fazer Login</Button>
                </Box>
            </Flex>
        </Box>
    )
}