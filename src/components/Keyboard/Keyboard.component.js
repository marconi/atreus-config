import React from 'react'
import PropTypes from 'prop-types'
import CssModules from 'react-css-modules'
import { map } from 'lodash'

import Row from '../Row'
import KeyDialog from '../KeyDialog'
import styles from './Keyboard.css'

const rows = [
  {
    keys: [
      {topLegend: 'q', position: [0, 0]},
      {topLegend: 'w', position: [1, 0]},
      {topLegend: 'f', position: [2, 0]},
      {topLegend: 'j', position: [3, 0]},
      {topLegend: 'g', position: [4, 0]},
      {topLegend: 'y', position: [5, 0]},
      {topLegend: 'u', position: [6, 0]},
      {topLegend: 'i', position: [7, 0]},
      {topLegend: 'o', position: [8, 0]},
      {topLegend: 'p', position: [9, 0]},
    ]
  },
  {
    keys: [
      {topLegend: 'a', position: [0, 1]},
      {topLegend: 'r', position: [1, 1]},
      {topLegend: 's', position: [2, 1]},
      {topLegend: 't', position: [3, 1]},
      {topLegend: 'd', position: [4, 1]},
      {topLegend: 'h', position: [5, 1]},
      {topLegend: 'n', position: [6, 1]},
      {topLegend: 'e', position: [7, 1]},
      {topLegend: 'l', position: [8, 1]},
      {topLegend: ':', bottomLegend: ';', position: [9, 1]},
    ]
  },
  {
    keys: [
      {topLegend: 'z', position: [0, 2]},
      {topLegend: 'x', position: [1, 2]},
      {topLegend: 'c', position: [2, 2]},
      {topLegend: 'v', position: [3, 2]},
      {topLegend: 'b', position: [4, 2]},
      {topLegend: 'k', position: [5, 2]},
      {topLegend: 'm', position: [6, 2]},
      {topLegend: '<', bottomLegend: ',', position: [7, 2]},
      {topLegend: '>', bottomLegend: '.', position: [8, 2]},
      {topLegend: '?', bottomLegend: '/', position: [9, 2]},
    ]
  },
  {
    keys: [
      {topLegend: '⎋', position: [0, 3]},
      {topLegend: '⇥', position: [1, 3]},
      {topLegend: 'fn', position: [2, 3]},
      {topLegend: '⌃', position: [3, 3]},
      {topLegend: '⌘', position: [4, 3]},
      {topLegend: 'spc', position: [7, 3]},
      {topLegend: '⇧', position: [8, 3]},
      {topLegend: '_', bottomLegend: '-', position: [9, 3]},
      {topLegend: '"', bottomLegend: '\'', position: [10, 3]},
      {topLegend: 'fn', position: [11, 3]},
    ],
    leftThumbKey: {topLegend: '⌫', position: [5, 3]},
    rightThumbKey: {topLegend: '↩', position: [6, 3]},
  },
]

export const KeyboardComponent = ((props, ref) => (
  <div ref={ref} styleName='keyboard'>
    {map(rows, (row, i) => (
      <Row
        key={`row-${i}`}
        number={i}
        {...row}
      />
    ))}

    {props.position && props.coordinates &&
      <KeyDialog {...props} />
    }
  </div>
))

KeyboardComponent.propTypes = {
  position: PropTypes.array,
  coordinates: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
  }),
}

export default React.forwardRef(CssModules(KeyboardComponent, styles))
