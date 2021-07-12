import React from 'react'
import useAuth from '../../hooks/auth'
import AdminLayout from '../adminLayout'

const AppLayout: React.FC = ({ children }) => {
  const { user } = useAuth()

  return <>{user ? <AdminLayout>{children}</AdminLayout> : <>{children}</>}</>
}

export default AppLayout
