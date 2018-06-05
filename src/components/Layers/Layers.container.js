import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import CssModules from 'react-css-modules'

import Keyboard from '../Keyboard'
import TabsComponent from './Tabs.component'
import styles from './Layers.css'

export class LayersContainer extends Component {
  static propTypes = {
    uiService: PropTypes.shape({
      activeLayer: PropTypes.number.isRequired,
    }).isRequired,
    keyboardService: PropTypes.shape({
      getLayer: PropTypes.func.isRequired,
    }).isRequired,
  }

  render () {
    const { activeLayer, setActiveLayer } = this.props.uiService
    const { getLayer } = this.props.keyboardService
    const layer = getLayer(activeLayer)

    return (
      <div styleName='wrapper'>
        <TabsComponent
          activeLayer={activeLayer}
          onTabChange={setActiveLayer}
        />
        {layer && <Keyboard layer={layer} />}
      </div>
    )
  }
}

const wrapper = CssModules(LayersContainer, styles)
export default inject('uiService', 'keyboardService')(observer(wrapper))

