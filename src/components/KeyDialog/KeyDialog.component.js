import React from 'react'
import PropTypes from 'prop-types'
import CssModules from 'react-css-modules'
import Select, { components } from 'react-select'

import styles from './KeyDialog.css'


const dialogHalfWidth = 150
const formatGroupLabel = (data) => <span>{data.label}</span>

const selectStyles = {
  valueContainer: (base, state) => {
    return { ...base, overflowY: 'inherit' }
  }
}

const Option = ({ children, ...rest }) => (
  <components.Option {...rest}>
    <div>{children}</div>
    <div className={styles.option}>{rest.data.value}</div>
  </components.Option>
)

export const KeyDialogComponent = ({ value, coordinates, onChange, onUpdate, onClose, options }) => (
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
          defaultValue={value}
          onChange={onChange}
          components={{ Option }}
          formatGroupLabel={formatGroupLabel}
          isClearable={true}
          options={options}
          styles={selectStyles}
        />
      </div>
    </div>
    <div className="card-footer">
      <div className="btn-group btn-group-block">
        <button
          className="btn btn-primary"
          onClick={onUpdate}
        >
          Update
        </button>
        <button
          className="btn"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  </div>
)

KeyDialogComponent.propTypes = {
  value: PropTypes.object,
  coordinates: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
  }),
  onChange: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
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
