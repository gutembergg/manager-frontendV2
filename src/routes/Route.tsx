import React, { ComponentType } from 'react'
import { Redirect, Route as RouteRRD, RouteProps } from 'react-router-dom'
import useAuth from '../hooks/auth'

interface IProps extends RouteProps {
  isPrivate?: boolean
  component: ComponentType
}

const Route: React.FC<IProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth()

  return (
    <RouteRRD
      {...rest}
      render={({ location }) => {
        return isPrivate === (user !== undefined) ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location }
            }}
          />
        )
      }}
    ></RouteRRD>
  )
}

export default Route
