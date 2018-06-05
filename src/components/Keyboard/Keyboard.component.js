import React from 'react'
import PropTypes from 'prop-types'
import CssModules from 'react-css-modules'
import { map } from 'lodash'

import Row from '../Row'
import KeyDialog from '../KeyDialog'
import styles from './Keyboard.css'

export const KeyboardComponent = (({ layer, keyModel, dialogCoordinates }, ref) => (
  <div ref={ref} styleName='keyboard'>
    {map(layer.rows.slice(), (row, i) => (
      <Row
        key={`row-${i}`}
        number={i}
        keyCodes={row.slice()}
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
  layer: PropTypes.shape({
    rows: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]).isRequired,
  }).isRequired,
  keyModel: PropTypes.object,
  dialogCoordinates: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
  }),
}

export default React.forwardRef(CssModules(KeyboardComponent, styles))
