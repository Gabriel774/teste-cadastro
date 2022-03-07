import { Box, InputGroup, Input, InputLeftElement, InputRightElement } from "@chakra-ui/react"
import Image from "next/image"
import showPasswordIcon from '../public/assets/img/eye-slash.png'
import { useState } from "react"

export default function Inp(props) {
    const [showPassword, setShowPassword] = useState(false)
    const type = showPassword ? 'password' : 'text'

    if (props.form === 'login' && props.type === 'text') return false
    if (props.form === 'forgot' && props.type === 'text') return false

    return (
        <Box m='15px 5px'>
            <label>
                {props.form === 'forgot' && props.type === 'password' ?
                    "Digite sua nova senha" : props.label}
            </label>
            <InputGroup mt='5px' size='lg'>
                <InputLeftElement
                    pointerEvents='none'
                    children={<Image width={20} height={20} src={props.icon} alt={props.alt} />}
                />

                <Input
                    borderRadius='0'
                    placeholder={'Digite ' + props.text}
                    type={props.type === type ? '' : props.type}
                    w='100%'
                    value={props.value}
                    onInput={e => props.handleChange(props.setValue, e.target.value)}
                />
                {props.type === 'password' && (
                    <InputRightElement
                        cursor='pointer'
                        children={<Image src={showPasswordIcon} />}
                        onClick={() => setShowPassword(!showPassword)}
                    />
                )}
            </InputGroup>
        </Box>
    )
}