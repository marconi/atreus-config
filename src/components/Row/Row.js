import React from 'react'
import PropTypes from 'prop-types'
import CssModules from 'react-css-modules'
import { chunk } from 'lodash';

import Key from '../Key'
import styles from './Row.css'

export const Row = ({ keys, number, leftThumbKey, rightThumbKey }) => {
  const [ leftKeys, rightKeys ] = chunk(keys, 5);

  return (
    <div styleName='row'>
      <div styleName={`left-pane left-pane-row-${number}`}>
        {leftKeys.map((key, i) => (
          <Key
            key={`left-pane-key-${i}`}
            pane="left"
            column={i}
            {...key}
          />
        ))}

        {leftThumbKey &&
          <Key
            pane="left"
            thumbClassName="left-pane-key-thumb"
            {...leftThumbKey}
          />
        }
      </div>
      <div styleName={`right-pane right-pane-row-${number}`}>
        {rightThumbKey &&
          <Key
            pane="right"
            thumbClassName="right-pane-key-thumb"
            {...rightThumbKey}
          />
        }

        {rightKeys.map((key, i) => (
          <Key
            key={`right-pane-key-${i}`}
            pane="right"
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
