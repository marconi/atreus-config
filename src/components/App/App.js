import React from 'react';
import { Provider } from 'mobx-react';
import CssModules from 'react-css-modules'

import Keyboard from '../Keyboard'
import Debugger from './Debugger'
import { uiService, layoutService } from '../../services'
import styles from './app.css'

const services = {
  uiService,
  layoutService,
}

const App = () => (
  <div styleName='app'>
    <Keyboard />
    <Debugger />
  </div>
)

const AppContainer = CssModules(App, styles)

const AppWrapper = (props) => (
  <Provider {...services}>
    <AppContainer {...props} />
  </Provider>
)

export default AppWrapper
