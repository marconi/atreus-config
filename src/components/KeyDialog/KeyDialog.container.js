import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

import KeyDialogComponent from './KeyDialog.component'

export class KeyDialogContainer extends Component {
  static propTypes = {
    uiService: PropTypes.shape({
      setShowKeyDialogAt: PropTypes.func.isRequired,
    }).isRequired,
    layoutService: PropTypes.shape({
      keyCodesOptions: PropTypes.array.isRequired,
    }).isRequired,
    keyModel: PropTypes.shape({
      name: PropTypes.string,
      position: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
      ]).isRequired,
      topLabel: PropTypes.string,
      bottomLabel: PropTypes.string,
      isThumb: PropTypes.bool,
    }).isRequired,
    coordinates: PropTypes.shape({
      top: PropTypes.number,
      left: PropTypes.number,
    }).isRequired,
  }

  handleClose = () => {
    const coordinates = {
      top: null,
      left: null
    }
    this.props.uiService.setShowKeyDialogAt(null, coordinates)
  }

  render () {
    const {
      layoutService: {
        keyCodesOptions,
      },
      keyModel,
      ...rest,
    } = this.props;

    return (
      <KeyDialogComponent
        onClose={this.handleClose}
        options={keyCodesOptions}
        keyModel={keyModel}
        {...rest}
      />
    )
  }
}

export default inject('uiService', 'layoutService')(observer(KeyDialogContainer))
