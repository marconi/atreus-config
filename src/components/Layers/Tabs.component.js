import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import CssModules from 'react-css-modules'
import { map, range, partial } from 'lodash'

import styles from './Tabs.css'

export const TabsComponent = ({ layersCount, activeLayer, onTabChange }) => (
  <div styleName='wrapper'>
    <ul className="tab">
      {map(range(layersCount), (layerNum) => (
        <li
          key={layerNum}
          className={cx('tab-item', {'active': activeLayer === layerNum})}>
          <a
            href={`#layer${layerNum}`}
            onClick={partial(onTabChange, layerNum)}
          >
            {`Layer ${layerNum}`}
          </a>
        </li>
      ))}
    </ul>
  </div>
)

TabsComponent.propTypes = {
  layersCount: PropTypes.number.isRequired,
  activeLayer: PropTypes.number.isRequired,
  onTabChange: PropTypes.func.isRequired,
}

TabsComponent.defaultProps = {
  layersCount: 3,
  activeLayer: 0,
}

export default CssModules(TabsComponent, styles)

