import React from 'react'
import PropTypes from 'prop-types'
import CssModules from 'react-css-modules'
import { map } from 'lodash'

import Row from '../Row'
import KeyDialog from '../KeyDialog'
import styles from './Keyboard.css'

export const KeyboardComponent = (({ rows, dialogPosition, dialogCoordinates }, ref) => (
  <div ref={ref} styleName='keyboard'>
    {map(rows, (row, i) => (
      <Row
        key={`row-${i}`}
        number={i}
        keys={row.slice()}
      />
    ))}

    {dialogPosition && dialogCoordinates &&
      <KeyDialog
        position={dialogPosition}
        coordinates={dialogCoordinates}
      />
    }
  </div>
))

KeyboardComponent.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    position: PropTypes.arrayOf(PropTypes.number),
    topLabel: PropTypes.string,
    bottomLabel: PropTypes.string,
  }))),
  dialogPosition: PropTypes.array,
  dialogCoordinates: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
  }),
}

export default React.forwardRef(CssModules(KeyboardComponent, styles))
