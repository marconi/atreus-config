import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

import KeyComponent from './Key.component'
import styles from './Key.css'

export class KeyContainer extends Component {
  static propTypes = {
    uiService: PropTypes.shape({
      setShowKeyDialogAt: PropTypes.func,
    }),
    position: PropTypes.arrayOf(PropTypes.number),
    keyboard: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.ref = React.createRef()
  }

  handleClick = () => {
    const {
      uiService,
      position,
    } = this.props

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
    uiService.setShowKeyDialogAt(position, coordinates)

    // remove marker
    this.ref.current.removeChild(marker)
  }

  render () {
    return (
      <div>
        <KeyComponent
          ref={this.ref}
          onClick={this.handleClick}
          {...this.props}
        />
      </div>
    )
  }
}

export default inject('uiService')(observer(KeyContainer))
