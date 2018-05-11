import React from 'react'
import CssModules from 'react-css-modules'
import { assign } from 'lodash'

import Key from '../Key'
import keyStyles from '../Key/Key.css'
import styles from './ThumbKey.css'

export const ThumbKey = (props) => (
  <Key {...props} styles={assign({}, keyStyles, styles)} />
);

export default CssModules(ThumbKey)
