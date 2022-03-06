import { Button, Text } from "@chakra-ui/react"
import Image from "next/image"

export default function Btn(props) {
    return (
        <Button
            borderRadius='0'
            w='100%'
            m={'10px 5px'}
            bg={props.bg}
            color={props.color}
            _hover={{ background: props.hover }}
            _active={{ background: props.active }}
        >
            <Image
                width={props.width}
                height={15}
                src={props.src}
                alt={props.alt}
            />
            {props.type ?
                (<Text ml='10px'>Cadastre-se com {props.name}</Text>) :
                (<Text ml='10px'>Entrar com {props.name}</Text>)
            }
        </Button>
    )
}