import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

export const Debugger = ({ keyboardService: { dumpRows } }) => (
  <pre>
    {`${dumpRows()}`}
  </pre>
)

Debugger.propTypes = {
  keyboardService: PropTypes.shape({
    dumpRows: PropTypes.func.isRequired,
  }).isRequired,
}

export default inject('keyboardService')(observer(Debugger))
