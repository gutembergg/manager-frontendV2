import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa'

import LogoApp from '../../assets/logo.png'
import Input from '../../components/input'
import Button from '../../components/button'

import {
  Container,
  WrapperLogo,
  Content,
  Logo,
  Form,
  FormActions
} from './styles'
import IDevCreateData from '../../interfaces/IDevCreateData'
import api from '../../services/api'
import { store } from 'react-notifications-component'

const SignUpDev: React.FC = () => {
  const history = useHistory()

  const [model, setModel] = useState<IDevCreateData>({
    name: '',
    email: '',
    password: ''
  })

  const updateModel = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setModel({
        ...model,
        [e.target.name]: e.target.value
      })
    },
    [model]
  )

  const submit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      try {
        const response = await api.post('/users', model)

        store.addNotification({
          title: 'Success!',
          message: 'Enregistrer avec success!',
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

        history.push('signin-dev')
        console.log('response: ', response)
      } catch (error) {
        store.addNotification({
          title: 'Error',
          message: "une erreur est survenue lors de l'enregistrement!",
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
    [model, history]
  )

  return (
    <Container>
      <WrapperLogo>
        <Logo src={LogoApp} alt="logo" />
      </WrapperLogo>

      <Content>
        <Form onSubmit={submit}>
          <h1>Créer compte</h1>
          <Input
            icon={FaUser}
            name="name"
            placeholder="name"
            type="text"
            onChange={updateModel}
          />
          <Input
            icon={FaEnvelope}
            name="email"
            placeholder="e-mail"
            type="email"
            onChange={updateModel}
          />
          <Input
            icon={FaLock}
            placeholder="password"
            name="password"
            isPassword
            type="password"
            onChange={updateModel}
          />
          <Button type="submit">Valider</Button>
          <FormActions>
            <Link to="/">Retourner</Link>
          </FormActions>
        </Form>
      </Content>
    </Container>
  )
}

export default SignUpDev
