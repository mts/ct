import React from 'react'
import cx from 'classnames'
import { button, buttonOuterBorder, buttonFirstInnerBorder, buttonSecondInnerBorder, buttonContainer } from './Button.scss'
import { buttonDefaultProps, buttonPropTypes } from './Button.props'

export function Button({ className }) {
  return (
    <a href="/" className={cx(className, button)}>
      <div className={buttonOuterBorder}>
        <div className={buttonFirstInnerBorder}>
          <div className={buttonSecondInnerBorder}>
            <div className={buttonContainer}>CHECKOUT</div>
          </div>
        </div>
      </div>
    </a>
  )
}

Button.defaultProps = buttonDefaultProps

Button.propTypes = buttonPropTypes
