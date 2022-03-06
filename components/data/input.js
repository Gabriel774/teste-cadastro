import userIcon from '../../public/assets/img/user.png'
import emailIcon from '../../public/assets/img/sms.png'
import passwordIcon from '../../public/assets/img/password.png'

export default [{
        text: 'seu usuário',
        type: 'text',
        icon: userIcon,
        label: 'Nome de usuário'
    },
    {
        text: 'seu e-mail',
        type: 'email',
        icon: emailIcon,
        label: 'E-mail'
    },
    {
        text: 'sua senha',
        type: 'password',
        icon: passwordIcon,
        label: 'Senha'
    },
]