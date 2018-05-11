import React from 'react'
import PropTypes from 'prop-types'
import CssModules from 'react-css-modules'
import { chunk } from 'lodash';

import Key from '../Key'
import ThumbKey from '../ThumbKey'
import styles from './Row.css'

export const Row = ({ keys, number, leftThumbKey, rightThumbKey }) => {
  const [ leftKeys, rightKeys ] = chunk(keys, 5);

  return (
    <div styleName='row'>
      <div styleName={`left-pane left-pane-row-${number}`}>
        {leftKeys.map((key, i) => (
          <Key
            key={`left-pane-key-${i}`}
            column={i}
            {...key}
          />
        ))}

        {leftThumbKey &&
          <ThumbKey
            position="left"
            {...leftThumbKey}
          />
        }
      </div>
      <div styleName={`right-pane right-pane-row-${number}`}>
        {rightThumbKey &&
          <ThumbKey
            position="right"
            {...rightThumbKey}
          />
        }

        {rightKeys.map((key, i) => (
          <Key
            key={`right-pane-key-${i}`}
            column={i}
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
  }),
}

export default CssModules(Row, styles, { allowMultiple: true })
