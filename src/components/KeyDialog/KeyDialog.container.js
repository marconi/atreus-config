import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { toJS } from 'mobx'

import KeyDialogComponent from './KeyDialog.component'

export class KeyDialogContainer extends Component {
  static propTypes = {
    uiService: PropTypes.shape({
      setShowKeyDialogAt: PropTypes.func.isRequired,
    }).isRequired,
    layoutService: PropTypes.shape({
      keyCodes: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
      ]).isRequired,
    }).isRequired,
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
    const {
      layoutService: {
        keyCodes,
      },
      ...rest,
    } = this.props;

    return (
      <KeyDialogComponent
        onClose={this.handleClose}
        options={toJS(keyCodes)}
        {...rest}
      />
    )
  }
}

export default inject('uiService', 'layoutService')(observer(KeyDialogContainer))
