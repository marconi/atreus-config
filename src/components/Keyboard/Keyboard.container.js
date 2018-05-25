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
    }).isRequired,
    layoutService: PropTypes.shape({
      rows: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
      ]).isRequired,
    }).isRequired,
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
      uiService: {
        showKeyDialogAt: {
          position,
          coordinates,
        }
      },
      layoutService: {
        rows,
      },
    } = this.props

    return (
      <KeyboardComponent
        ref={this.ref}
        dialogPosition={(position.length) ? position.slice() : null}
        dialogCoordinates={coordinates}
        rows={rows.slice()}
      />
    )
  }
}

export default inject('uiService', 'layoutService')(observer(KeyboardContainer))
