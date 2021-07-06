import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import SigninDev from '../pages/SigninDev'
import Start from '../pages/Start'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Start} />
      <Route path="/signin-dev" component={SigninDev} />
      <Redirect to="/" />
    </Switch>
  )
}

export default Routes
