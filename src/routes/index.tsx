import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import SignInClient from '../pages/signInClient'
import SigninDev from '../pages/SigninDev'
import SignUpDev from '../pages/SignUpDev'
import Start from '../pages/Start'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Start} />
      <Route path="/signin-dev" component={SigninDev} />
      <Route path="/signin-client" component={SignInClient} />
      <Route path="/signup-dev" component={SignUpDev} />
      <Redirect to="/" />
    </Switch>
  )
}

export default Routes
