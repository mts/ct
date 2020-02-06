import React from 'react'
import cx from 'classnames'
import { loop } from './Loop.scss'
import { loopDefaultProps, loopPropTypes } from './Loop.props'

export function Loop({ className }) {
  return <div className={cx(className, loop)}>Loop under construction</div>
}

Loop.defaultProps = loopDefaultProps

Loop.propTypes = loopPropTypes
