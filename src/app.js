import React from 'react'
import {HashRouter, Switch, Route, Redirect, Router} from 'react-router-dom'
import {GlobalStyles} from './styles'

import {Balance} from './balance/index'
import {Login} from './login/index'
import {Registro} from './registro/index'

export const App = () => {

  // const UserLogged = ({ children }) => {
  //   return children({ isAuth: true})
  // }

  return(
    <HashRouter>
        <GlobalStyles />
        <Route exact path="/" component={Login} />
        <Route exact path="/balance" component={Balance} />
        <Route exact path="/registro" component={Registro} />
    </HashRouter>
  )
}