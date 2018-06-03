import React from 'react'
import PropTypes from 'prop-types'
import CssModules from 'react-css-modules'
import { toUpper } from 'lodash'
import cx from 'classnames'

import styles from './Key.css'

export const Key = ({
  keyModel,
  indentLevel,
  onClick,
  isLeft,
  isRight,
  isActive,
}, ref) => (
  <div
    ref={ref}
    styleName={cx('wrapper', {
      left: isLeft,
      right: isRight,
      [`indent-${indentLevel}`]: !!indentLevel,
      active: isActive,
    })}
    onClick={onClick}
  >
    <div styleName={`inner ${(!keyModel.bottomLabel) ? 'no-bottom' : ''}`}>
      <div styleName='top-label'>
        {toUpper(keyModel.topLabel)}
      </div>
      {keyModel.bottomLabel &&
        <div styleName='bottom-label'>
          {toUpper(keyModel.bottomLabel)}
        </div>
      }
    </div>
  </div>
)

Key.propTypes = {
  keyModel: PropTypes.shape({
    topLabel: PropTypes.string.isRequired,
    bottomLabel: PropTypes.string,
    position: PropTypes.arrayOf(PropTypes.number),
  }),
  indentLevel: PropTypes.oneOf(['one', 'two']),
  onClick: PropTypes.func,
  isLeft: PropTypes.bool,
  isRight: PropTypes.bool,
  isActive: PropTypes.bool,
}

export default React.forwardRef(CssModules(Key, styles, { allowMultiple: true }))
