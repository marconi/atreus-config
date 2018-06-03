import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

import KeyComponent from './Key.component'
import styles from './Key.css'

export class KeyContainer extends Component {
  static propTypes = {
    uiService: PropTypes.shape({
      setShowKeyDialogAt: PropTypes.func,
      isShowingKeyDialogAt: PropTypes.func,
      keyboard: PropTypes.object,
    }),
    keyModel: PropTypes.shape({
      position: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
      ]).isRequired,
    }).isRequired,
    indentLevel: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.ref = React.createRef()
  }

  matchesPane = ([ x, y ], expected) => {
    const midCol = (y < 3) ? 5 : 6
    const pane = (x < midCol) ? 'left' : 'right'
    return pane === expected
  }

  handleClick = () => {
    const {
      uiService,
      keyModel,
    } = this.props

    // HACK: to center keydialog inside a key,
    // we need to get the coordinates of the key's center
    // by creating on-fly marker element.
    // we then absolutely position it and take its top-left
    // position.

    // create a temporary marker
    const marker = document.createElement('div')
    marker.className = styles.marker
    this.ref.current.appendChild(marker)

    // compute offset using marker
    const keyHalf = 31
    const keyRect = this.ref.current.getBoundingClientRect()
    const keyboardRect = uiService.keyboard.getBoundingClientRect()
    const coordinates = {
      top: (keyRect.top - keyboardRect.top) + keyHalf,
      left: (keyRect.left - keyboardRect.left) + keyHalf,
    }
    uiService.setShowKeyDialogAt(keyModel, coordinates)

    // remove marker
    this.ref.current.removeChild(marker)
  }

  render () {
    const {
      uiService,
      keyModel,
      indentLevel,
      ...rest,
    } = this.props

    return (
      <div>
        <KeyComponent
          ref={this.ref}
          onClick={this.handleClick}
          isLeft={this.matchesPane(keyModel.position, 'left')}
          isRight={this.matchesPane(keyModel.position, 'right')}
          isActive={uiService.isShowingKeyDialogAt(keyModel.position)}
          keyModel={keyModel}
          indentLevel={indentLevel}
          {...rest}
        />
      </div>
    )
  }
}

export default inject('uiService')(observer(KeyContainer))
