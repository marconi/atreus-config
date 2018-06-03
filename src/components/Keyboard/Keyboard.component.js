import React from 'react'
import PropTypes from 'prop-types'
import CssModules from 'react-css-modules'
import { map } from 'lodash'

import Row from '../Row'
import KeyDialog from '../KeyDialog'
import styles from './Keyboard.css'

export const KeyboardComponent = (({ rows, keyModel, dialogCoordinates }, ref) => (
  <div ref={ref} styleName='keyboard'>
    {map(rows, (row, i) => (
      <Row
        key={`row-${i}`}
        number={i}
        keys={row.slice()}
      />
    ))}

    {keyModel && dialogCoordinates &&
      <KeyDialog
        keyModel={keyModel}
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
  keyModel: PropTypes.object,
  dialogCoordinates: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
  }),
}

export default React.forwardRef(CssModules(KeyboardComponent, styles))
