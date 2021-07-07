import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useContext,
  useState
} from 'react'
import { Link, useHistory } from 'react-router-dom'

import LogoApp from '../../assets/logo.png'
import Input from '../../components/input'
import { FaEnvelope, FaLock } from 'react-icons/fa'

import {
  Container,
  WrapperLogo,
  Logo,
  Content,
  Form,
  FormActions
} from './styles'
import Button from '../../components/button'
import { AuthContext } from '../../context/auth'
import ICredentialsDevSession from '../../interfaces/ICredentialsDevSession'
import { store } from 'react-notifications-component'

const SignInDev: React.FC = () => {
  const history = useHistory()
  const { user, signInDev } = useContext(AuthContext)

  const [model, setModel] = useState<ICredentialsDevSession>({
    email: '',
    password: ''
  })

  const updateModel = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()
      setModel({
        ...model,
        [e.target.name]: e.target.value
      })
    },
    [model]
  )

  const onSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      try {
        await signInDev(model)

        store.addNotification({
          title: 'Success!',
          message: 'Authentifié avec success!',
          type: 'success',
          insert: 'top',
          container: 'top-right',
          animationIn: ['animate__animated', 'animate__fadeIn'],
          animationOut: ['animate__animated', 'animate__fadeOut'],
          dismiss: {
            duration: 5000,
            onScreen: true
          }
        })

        history.push('dashboard')
      } catch (error) {
        store.addNotification({
          title: 'Error',
          message: "une erreur est survenue lors de l'authentication!",
          type: 'danger',
          insert: 'top',
          container: 'top-right',
          animationIn: ['animate__animated', 'animate__fadeIn'],
          animationOut: ['animate__animated', 'animate__fadeOut'],
          dismiss: {
            duration: 5000,
            onScreen: true
          }
        })
      }
    },
    [model, signInDev]
  )

  return (
    <Container>
      <WrapperLogo>
        <Logo src={LogoApp} alt="logo" />
      </WrapperLogo>

      <Content>
        <Form onSubmit={onSubmit}>
          <h1>Login comme Dev</h1>

          <Input
            icon={FaEnvelope}
            placeholder="e-mail"
            type="email"
            name="email"
            onChange={updateModel}
          />
          <Input
            icon={FaLock}
            placeholder="password"
            isPassword
            name="password"
            type="password"
            onChange={updateModel}
          />

          <Button type="submit">Valider</Button>
          <FormActions>
            <Link to="signup-dev">Créer votre compte</Link>
            <Link to="/">Retourner</Link>
          </FormActions>
        </Form>
      </Content>
    </Container>
  )
}

export default SignInDev
