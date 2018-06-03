import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

export const Debugger = ({ layoutService: { dumpRows } }) => (
  <pre>
    {`${dumpRows()}`}
  </pre>
)

Debugger.propTypes = {
  layoutService: PropTypes.shape({
    dumpRows: PropTypes.func.isRequired,
  }).isRequired,
}

export default inject('layoutService')(observer(Debugger))
