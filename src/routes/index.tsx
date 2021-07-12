import React from 'react'
import { Switch, Redirect } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import SignInClient from '../pages/signInClient'
import SigninDev from '../pages/SigninDev'
import SignUpDev from '../pages/SignUpDev'
import Start from '../pages/Start'
import Route from './Route'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Start} />
      <Route path="/signin-dev" component={SigninDev} />
      <Route path="/signin-client" component={SignInClient} />
      <Route path="/signup-dev" component={SignUpDev} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Redirect to="/" />
    </Switch>
  )
}

export default Routes
