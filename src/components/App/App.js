import React from 'react';
import { Provider } from 'mobx-react';
import CssModules from 'react-css-modules'

import Keyboard from '../Keyboard'
import uiService from '../../services/uiService'
import styles from './app.css'

const services = {
  uiService
}

const App = () => (
  <div styleName='app'>
    <Keyboard />
  </div>
)

const AppContainer = CssModules(App, styles)

const AppWrapper = (props) => (
  <Provider {...services}>
    <AppContainer {...props} />
  </Provider>
);

export default AppWrapper