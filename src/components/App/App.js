import React from 'react';
import { Provider } from 'mobx-react';
import CssModules from 'react-css-modules'

import Layers from '../Layers'
import { uiService, keyboardService } from '../../services'
import styles from './app.css'

const services = {
  uiService,
  keyboardService,
}

const App = () => (
  <div styleName='app'>
    <Layers />
  </div>
)

const AppContainer = CssModules(App, styles)

const AppWrapper = (props) => (
  <Provider {...services}>
    <AppContainer {...props} />
  </Provider>
)

export default AppWrapper
