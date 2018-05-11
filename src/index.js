import React from 'react'
import ReactDOM from 'react-dom'
import CssModules from 'react-css-modules'

import Keyboard from './components/Keyboard'
import styles from './index.css'

const App = () => (
  <div styleName="app">
    <Keyboard />
  </div>
)

const AppContainer = CssModules(App, styles)

ReactDOM.render(
  <AppContainer />,
  document.getElementById('root')
)
