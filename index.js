import React from 'react'
import ReactDOM from 'react-dom'
import Context from './src/context'

import {App} from './src/App'

ReactDOM.render(
  <Context.Provider>
    <App />
  </Context.Provider>
, document.getElementById('app'))
