import React from 'react'
import {BrowserRouter, Switch, Route, Redirect, Router} from 'react-router-dom'
import {GlobalStyles} from './styles'

import {Balance} from './balance/index'
import {Login} from './login/index'
import {Registro} from './registro/index'
import {PasswordChange} from './credentials/password'
import {PinChange} from './credentials/pin'
import {ForgotPass} from './forgotpass/index'

const App = () => {

  // const UserLogged = ({ children }) => {
  //   return children({ isAuth: true})
  // }

  return(
    <BrowserRouter>
        <GlobalStyles />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/balance" component={Balance} />
          <Route exact path="/registro" component={Registro} />
          <Route exact path="/passwordChange" component={PasswordChange} />
          <Route exact path="/pinChange" component={PinChange} />
          <Route exact path="/forgotPass" component={ForgotPass} />
          <Route component={Login} />
        </Switch>
    </BrowserRouter>
  )
}
export default App