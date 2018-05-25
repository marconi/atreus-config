import React from 'react'
import PropTypes from 'prop-types'
import CssModules from 'react-css-modules'
import { chunk, find, filter, map } from 'lodash'
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

export const Row = ({ number, keys }) => {
  const [ leftKeys, rightKeys ] = chunk(keys, (number === 3) ? 6 : 5);
  const leftThumbKey = find(leftKeys, 'isThumb');
  const rightThumbKey = find(rightKeys, 'isThumb');

  return (
    <div styleName='row'>
      <div styleName={cx('left-pane', `left-pane-row-${number}`)}>
        {map(filter(leftKeys, { isThumb: false }), (key, i) => (
          <Key
            key={`left-pane-key-${i}`}
            indentLevel={getIndentLevel(i)}
            instance={key}
          />
        ))}

        {leftThumbKey && <ThumbKey instance={leftThumbKey} />}
      </div>
      <div styleName={cx('right-pane', `right-pane-row-${number}`)}>
        {rightThumbKey && <ThumbKey instance={rightThumbKey} />}

        {map(filter(rightKeys, { isThumb: false }), (key, i) => (
          <Key
            key={`right-pane-key-${i}`}
            indentLevel={getIndentLevel(i)}
            instance={key}
          />
        ))}
      </div>
    </div>
  )
}

Row.propTypes = {
  number: PropTypes.number.isRequired,
  keys: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]).isRequired,
    topLabel: PropTypes.string.isRequired,
    bottomLabel: PropTypes.string.isRequired,
  })).isRequired,
}

export default CssModules(Row, styles, { allowMultiple: true })
