import React from 'react'
import { Link } from 'react-router-dom'

import { FaCode } from 'react-icons/fa'
import Input from '../../components/input'
import Button from '../../components/button'

import LogoApp from '../../assets/logo.png'

import {
  Container,
  WrapperLogo,
  Logo,
  Content,
  Form,
  FormActions
} from './styles'

const SignInClient: React.FC = () => {
  return (
    <Container>
      <WrapperLogo>
        <Logo src={LogoApp} alt="logo" />
      </WrapperLogo>

      <Content>
        <Form>
          <h1>Login comme Client</h1>
          <Input icon={FaCode} placeholder="code" type="text" />
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

export default SignInClient
