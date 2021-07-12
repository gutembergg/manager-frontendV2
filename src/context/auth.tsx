import React, { createContext, useCallback, useState } from 'react'
import ICredentialsDevSession from '../interfaces/ICredentialsDevSession'
import api from '../services/api'

interface IUser {
  id: string
  name: string
  email: string
  active: boolean
  created_at: Date | string
  updated_at: Date | string
}

interface IAuthState {
  user: IUser
  token: string
}

export interface IAuthContextState {
  user: IUser
  token: string
  signInDev(credentialsDevSession: ICredentialsDevSession): Promise<void>
  signOut(): void
}

export const AuthContext = createContext<IAuthContextState>(
  {} as IAuthContextState
)

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('manager:token')
    const user = localStorage.getItem('manager:user')

    if (token && user) {
      return { token, user: JSON.parse(user) }
    }

    return {} as IAuthState
  })

  const signInDev = useCallback(
    async ({ email, password }: ICredentialsDevSession) => {
      const response = await api.post('/session', {
        email,
        password
      })

      const { token, user } = response.data

      localStorage.setItem('manager:token', token)
      localStorage.setItem('manager:user', JSON.stringify(user))

      setData({
        token,
        user
      })
    },
    []
  )

  const signOut = useCallback(() => {
    localStorage.removeItem('manager:token')
    localStorage.removeItem('manager:user')

    setData({} as IAuthState)
  }, [])

  return (
    <AuthContext.Provider
      value={{ signInDev, user: data.user, token: data.token, signOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}
