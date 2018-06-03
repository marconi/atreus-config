import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { observable, action } from 'mobx'
import { get } from 'lodash'

import KeyDialogComponent from './KeyDialog.component'

export class KeyDialogContainer extends Component {
  static propTypes = {
    uiService: PropTypes.shape({
      setShowKeyDialogAt: PropTypes.func.isRequired,
    }).isRequired,
    layoutService: PropTypes.shape({
      keyCodesOptions: PropTypes.array.isRequired,
      getKeyCodeBySymbol: PropTypes.func.isRequired,
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
    }),
    coordinates: PropTypes.shape({
      top: PropTypes.number,
      left: PropTypes.number,
    }).isRequired,
  }

  @observable selectedSymbol = null
  @action handleOnChange = (selected) => this.selectedSymbol = get(selected, 'value', 'KC_NO')

  handleOnUpdate = () => {
    const {
      keyModel,
      layoutService: {
        getKeyCodeBySymbol,
      },
    } = this.props

    const key = getKeyCodeBySymbol(this.selectedSymbol)
    if (key) {
      keyModel.update({
        symbol: key.symbol,
        topLabel: key.topLabel,
        bottomLabel: key.bottomLabel,
        description: key.description,
      })
    }

    this.handleClose()
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

    const value = (keyModel) ? {
      value: keyModel.symbol,
      label: keyModel.description,
    } : null

    return (
      <KeyDialogComponent
        onChange={this.handleOnChange}
        onUpdate={this.handleOnUpdate}
        onClose={this.handleClose}
        options={keyCodesOptions}
        value={value}
        {...rest}
      />
    )
  }
}

export default inject('uiService', 'layoutService')(observer(KeyDialogContainer))
