import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { inject, observer, PropTypes as MobxPropTypes } from 'mobx-react'

import KeyboardComponent from './Keyboard.component'

export class KeyboardContainer extends Component {
  static propTypes = {
    uiService: PropTypes.shape({
      showKeyDialogAt: PropTypes.shape({
        position: MobxPropTypes.observableArray,
        coordinates: PropTypes.object,
      }),
      setKeyboard: PropTypes.func.isRequired,
    }),
  }

  constructor(props) {
    super(props);
    this.ref = React.createRef()
  }

  componentDidMount () {
    this.props.uiService.setKeyboard(this.ref.current)
  }

  render () {
    const {
      showKeyDialogAt: {
        position,
        coordinates,
      }
    } = this.props.uiService

    return (
      <KeyboardComponent
        ref={this.ref}
        position={(position.length) ? position.slice() : null}
        coordinates={coordinates}
      />
    )
  }
}

export default inject('uiService')(observer(KeyboardContainer))
