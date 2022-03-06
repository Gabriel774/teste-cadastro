import { Heading, Box, Flex, Button } from '@chakra-ui/react'

export default function NavBar(props) {
    return (
        <Box w='100%' h='55px' bg='gray.700' color='white'>
            <Flex
                ml="25px"
                mr="25px"
                h="100%"
                direction="row"
                justify="space-between"
                align="center"
            >
                <Heading as='h1'>eCards</Heading>

                <Box>
                    <Button onClick={() => props.showModal(true)} mr="20px" color="gray.900">Criar Conta</Button>
                    <Button onClick={() => props.showModal(false)} color="gray.900">Fazer Login</Button>
                </Box>
            </Flex>
        </Box>
    )
}