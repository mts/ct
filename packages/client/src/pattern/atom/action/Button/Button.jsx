import React from 'react'
import { buttonDefaultProps, buttonPropTypes } from './Button.props'

export function Button({ className }) {
  return <div className={className}>Button under construction</div>
}

Button.defaultProps = buttonDefaultProps

Button.propTypes = buttonPropTypes
