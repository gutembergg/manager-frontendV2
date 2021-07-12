import React from 'react'
import { FaCubes, FaHome, FaSignOutAlt, FaUsers } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import appLogo from '../../assets/logo.png'
import useAuth from '../../hooks/auth'
import HeaderMenuItems from '../HeaderMenuItems'
import UserInfo from '../UserInfo'

import { Container, Logo, Menu } from './styles'

const Header: React.FC = () => {
  const { push } = useHistory()
  const { signOut } = useAuth()

  return (
    <Container>
      <Logo src={appLogo} alt="Logo"></Logo>
      <Menu>
        <HeaderMenuItems
          title="Dashboard"
          icon={FaHome}
          action={() => push('/dashboard')}
        />
        <HeaderMenuItems
          title="Clients"
          icon={FaUsers}
          action={() => push('/dashboard')}
        />
        <HeaderMenuItems
          title="Projects"
          icon={FaCubes}
          action={() => push('/dashboard')}
        />
        <HeaderMenuItems title="Sortir" icon={FaSignOutAlt} action={signOut} />
        <UserInfo />
      </Menu>
    </Container>
  )
}

export default Header
