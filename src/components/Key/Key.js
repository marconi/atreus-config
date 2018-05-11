import React from 'react'
import PropTypes from 'prop-types'
import CssModules from 'react-css-modules'
import { toUpper, includes } from 'lodash'

import styles from './Key.css'

const getIndentedColumnClass = (column) => {
  return (includes([1, 2, 3], column)) ? `column-${column}` : ''
}

export const Key = ({ topLegend, bottomLegend, column, position }) => (
  <div styleName={`wrapper ${position || ''} ${getIndentedColumnClass(column)}`}>
    <div styleName={`inner ${(!bottomLegend) ? 'no-bottom' : ''}`}>
      <div styleName='top-legend'>
        {toUpper(topLegend)}
      </div>
      {bottomLegend &&
        <div styleName='bottom-legend'>
          {toUpper(bottomLegend)}
        </div>
      }
    </div>
  </div>
);

Key.propTypes = {
  topLegend: PropTypes.string.isRequired,
  bottomLegend: PropTypes.string,
  column: PropTypes.number,
  position: PropTypes.oneOf(['left', 'right']),
}

export default CssModules(Key, styles, { allowMultiple: true })
