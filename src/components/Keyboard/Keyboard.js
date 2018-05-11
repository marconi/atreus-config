import React from 'react'
import CssModules from 'react-css-modules'

import Row from '../Row'
import styles from './Keyboard.css'

export const Keyboard = (props) => (
  <div styleName='keyboard'>
    <Row
      number={0}
      keys={[
        {topLegend: 'q'},
        {topLegend: 'w'},
        {topLegend: 'w'},
        {topLegend: 'f'},
        {topLegend: 'j'},
        {topLegend: 'g'},
        {topLegend: 'y'},
        {topLegend: 'u'},
        {topLegend: 'i'},
        {topLegend: 'o'},
        {topLegend: 'p'},
      ]}
    />
    <Row
      number={1}
      keys={[
        {topLegend: 'a'},
        {topLegend: 'r'},
        {topLegend: 's'},
        {topLegend: 't'},
        {topLegend: 'd'},
        {topLegend: 'h'},
        {topLegend: 'n'},
        {topLegend: 'e'},
        {topLegend: 'l'},
        {topLegend: ':', bottomLegend: ';'},
      ]}
    />
    <Row
      number={2}
      keys={[
        {topLegend: 'z'},
        {topLegend: 'x'},
        {topLegend: 'c'},
        {topLegend: 'v'},
        {topLegend: 'b'},
        {topLegend: 'k'},
        {topLegend: 'm'},
        {topLegend: '<', bottomLegend: ','},
        {topLegend: '>', bottomLegend: '.'},
        {topLegend: '?', bottomLegend: '/'},
      ]}
    />
    <Row
      number={3}
      keys={[
        {topLegend: '⎋'},
        {topLegend: '⇥'},
        {topLegend: 'fn'},
        {topLegend: '⌃'},
        {topLegend: '⌘'},
        {topLegend: 'spc'},
        {topLegend: '⇧'},
        {topLegend: '_', bottomLegend: '-'},
        {topLegend: '"', bottomLegend: '\''},
        {topLegend: 'fn'},
      ]}
      leftThumbKey={{topLegend: '⌫'}}
      rightThumbKey={{topLegend: '↩'}}
    />
  </div>
)

export default CssModules(Keyboard, styles)
