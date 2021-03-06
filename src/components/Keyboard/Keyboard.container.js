import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

import KeyboardComponent from './Keyboard.component'

export class KeyboardContainer extends Component {
  static propTypes = {
    uiService: PropTypes.shape({
      showKeyDialogAt: PropTypes.shape({
        keyModel: PropTypes.shape({
          symbol: PropTypes.string,
          position: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.array,
          ]).isRequired,
          topLabel: PropTypes.string,
          bottomLabel: PropTypes.string,
          isThumb: PropTypes.bool,
        }),
        coordinates: PropTypes.object,
      }),
      setKeyboard: PropTypes.func.isRequired,
    }).isRequired,
    layer: PropTypes.shape({
      name: PropTypes.string.isRequired,
      rows: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
      ]).isRequired,
    }).isRequired 
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
          keyModel,
          coordinates,
        }
      },
      layer,
    } = this.props

    return (
      <KeyboardComponent
        ref={this.ref}
        keyModel={keyModel}
        dialogCoordinates={coordinates}
        layer={layer}
      />
    )
  }
}

export default inject('uiService', 'keyboardService')(observer(KeyboardContainer))
