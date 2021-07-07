import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactNotification from 'react-notifications-component'
import Routes from './routes'
import GlobalStyles from './styles/GlobalStyles'

import 'react-notifications-component/dist/theme.css'
import AppProvider from './context'

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <ReactNotification />
        <AppProvider>
          <Routes />
        </AppProvider>
      </BrowserRouter>
      <GlobalStyles />
    </>
  )
}

export default App
