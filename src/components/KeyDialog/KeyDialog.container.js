import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

import KeyDialogComponent from './KeyDialog.component'

export class KeyDialogContainer extends Component {
  static propTypes = {
    uiService: PropTypes.shape({
      setShowKeyDialogAt: PropTypes.func.isRequired,
    }),
    position: PropTypes.array,
    coordinates: PropTypes.shape({
      top: PropTypes.number,
      left: PropTypes.number,
    }),
  }

  handleClose = () => {
    const position = []
    const coordinates = {
      top: null,
      left: null
    }
    this.props.uiService.setShowKeyDialogAt(position, coordinates)
  }

  render () {
    return (
      <KeyDialogComponent
        onClose={this.handleClose}
        {...this.props}
      />
    )
  }
}

export default inject('uiService')(observer(KeyDialogContainer))
