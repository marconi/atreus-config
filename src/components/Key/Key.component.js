import React from 'react'
import PropTypes from 'prop-types'
import CssModules from 'react-css-modules'
import { toUpper } from 'lodash'

import styles from './Key.css'

const getPaneClass = ([ x, y ]) => {
  const midCol = (y < 3) ? 5 : 6
  return (x < midCol) ? 'left' : 'right'
}

const getIndentClass = (indentLevel) => (indentLevel) ? `indent-${indentLevel}` : ''

export const Key = ({
  topLegend,
  bottomLegend,
  position,
  indentLevel,
  onClick,
}, ref) => (
  <div
    ref={ref}
    styleName={`wrapper ${getPaneClass(position)} ${getIndentClass(indentLevel)}`}
    onClick={onClick}
  >
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
)

Key.propTypes = {
  topLegend: PropTypes.string.isRequired,
  bottomLegend: PropTypes.string,
  position: PropTypes.arrayOf(PropTypes.number),
  indentLevel: PropTypes.oneOf(['one', 'two']),
  onClick: PropTypes.func,
}

export default React.forwardRef(CssModules(Key, styles, { allowMultiple: true }))
