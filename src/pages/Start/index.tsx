import React from 'react'
import { useHistory } from 'react-router'
import { FaCode, FaUsers } from 'react-icons/fa'

import LogoApp from '../../assets/logo.png'

import {
  Container,
  WrapperLogo,
  Logo,
  EntryCard,
  EntryCardItem
} from './styles'

const Start: React.FC = () => {
  const history = useHistory()

  const navigate = (path: string) => {
    history.push(path)
  }
  return (
    <Container>
      <WrapperLogo>
        <Logo src={LogoApp} alt="logo" />
      </WrapperLogo>
      <EntryCard>
        <EntryCardItem
          background={'#111111'}
          onClick={() => navigate('signin-dev')}
        >
          <FaCode size={50} />
          <span>Entrer comme dev</span>
        </EntryCardItem>

        <EntryCardItem color={'#111111'}>
          <FaUsers size={50} />
          <span>Entrer comme Client</span>
        </EntryCardItem>
      </EntryCard>
    </Container>
  )
}

export default Start
