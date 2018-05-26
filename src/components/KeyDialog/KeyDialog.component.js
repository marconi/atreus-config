import React from 'react'
import PropTypes from 'prop-types'
import CssModules from 'react-css-modules'
import Select from 'react-select'

import styles from './KeyDialog.css'

const formatGroupLabel = (data) => <span>{data.label}</span>

const dialogHalfWidth = 150

export const KeyDialogComponent = ({ position, coordinates, onClose, options }) => (
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
        <Select
          options={options}
          formatGroupLabel={formatGroupLabel}
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
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })).isRequired,
  })).isRequired,
}

export default CssModules(KeyDialogComponent, styles)
