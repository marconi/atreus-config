import React from 'react'
import PropTypes from 'prop-types'
import CssModules from 'react-css-modules'
import { chunk } from 'lodash'
import cx from 'classnames'

import Key from '../Key'
import ThumbKey from '../ThumbKey'
import styles from './Row.css'

const getIndentLevel = (column) => {
  if (column === 1 || column === 3) {
    return 'one'
  } else if (column === 2) {
    return 'two'
  }
  return null
}

export const Row = ({ keys, number, leftThumbKey, rightThumbKey, onKeyClick }) => {
  const [ leftKeys, rightKeys ] = chunk(keys, 5);

  return (
    <div styleName='row'>
      <div styleName={cx('left-pane', `left-pane-row-${number}`)}>
        {leftKeys.map((key, i) => (
          <Key
            key={`left-pane-key-${i}`}
            indentLevel={getIndentLevel(i)}
            {...key}
          />
        ))}

        {leftThumbKey &&
          <ThumbKey {...leftThumbKey} />
        }
      </div>
      <div styleName={cx('right-pane', `right-pane-row-${number}`)}>
        {rightThumbKey &&
          <ThumbKey {...rightThumbKey} />
        }

        {rightKeys.map((key, i) => (
          <Key
            key={`right-pane-key-${i}`}
            indentLevel={getIndentLevel(i)}
            {...key}
          />
        ))}
      </div>
    </div>
  )
}

Row.propTypes = {
  number: PropTypes.number.isRequired,
  keys: PropTypes.arrayOf(PropTypes.shape({
    topLegend: PropTypes.string,
    bottomLegend: PropTypes.string,
  })).isRequired,
  leftThumbKey: PropTypes.shape({
    topLegend: PropTypes.string,
    bottomLegend: PropTypes.string,
  }),
  rightThumbKey: PropTypes.shape({
    topLegend: PropTypes.string,
    bottomLegend: PropTypes.string,
  })
}

export default CssModules(Row, styles, { allowMultiple: true })
