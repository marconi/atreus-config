import React from 'react'
import PropTypes from 'prop-types'
import CssModules from 'react-css-modules'

import styles from './KeyDialog.css'

export const KeyDialog = ({ position, coordinates }) => (
  <div
    styleName='wrapper'
    className="siimple-box"
    style={{
      top: `${coordinates.top}px`,
      left: `${coordinates.left}px`,
    }}
  >
    {JSON.stringify(position, null, 2)}
  </div>
);

KeyDialog.propTypes = {
  position: PropTypes.array,
  coordinates: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
  }),
}

export default CssModules(KeyDialog, styles)
