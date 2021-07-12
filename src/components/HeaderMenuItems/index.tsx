import React from 'react'
import { IconType } from 'react-icons'

import { Container } from './styles'

interface IProps {
  title: string
  icon: IconType
  action(): void
}

const HeaderMenuItems: React.FC<IProps> = ({ title, icon: Icon, action }) => {
  return (
    <Container title={title} onClick={action}>
      <Icon />
    </Container>
  )
}

export default HeaderMenuItems
