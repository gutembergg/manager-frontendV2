import React from 'react'
import { Link } from 'react-router-dom'

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

const SignInDev: React.FC = () => {
  return (
    <Container>
      <WrapperLogo>
        <Logo src={LogoApp} alt="logo" />
      </WrapperLogo>

      <Content>
        <Form>
          <h1>Login comme Dev</h1>
          <Input icon={FaEnvelope} placeholder="e-mail" type="email" />
          <Input
            icon={FaLock}
            placeholder="password"
            isPassword
            type="password"
          />
          <Button>Valider</Button>
          <FormActions>
            <Link to="/">Créer votre compte</Link>
            <Link to="/">Retourner</Link>
          </FormActions>
        </Form>
      </Content>
    </Container>
  )
}

export default SignInDev
