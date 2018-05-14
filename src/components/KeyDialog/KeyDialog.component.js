import React from 'react'
import PropTypes from 'prop-types'
import CssModules from 'react-css-modules'
import Select from 'react-select'

import styles from './KeyDialog.css'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const dialogHalfWidth = 150

export const KeyDialogComponent = ({ position, coordinates, onClose }) => (
  <div
    styleName='wrapper'
    className="card"
    style={{
      top: `${coordinates.top}px`,
      left: `${coordinates.left - dialogHalfWidth}px`,
    }}
  >
    <div className="card-body">
      <div className="form-group">
        <label className="form-label" htmlFor="top-key">Top Key</label>
        <Select
          options={options}
          isClearable={true}
        />
        <label className="form-label" htmlFor="bottom-key">Bottom Key</label>
        <Select
          options={options}
          isClearable={true}
        />
      </div>
    </div>
    <div className="card-footer">
      <div className="btn-group btn-group-block">
        <button className="btn btn-primary">Update</button>
        <button
          className="btn"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  </div>
);

KeyDialogComponent.propTypes = {
  position: PropTypes.array,
  coordinates: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
  }),
  onClose: PropTypes.func.isRequired,
}

export default CssModules(KeyDialogComponent, styles)
