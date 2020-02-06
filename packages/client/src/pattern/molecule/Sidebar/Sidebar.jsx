import React from 'react'
import { sidebarDefaultProps, sidebarPropTypes } from './Sidebar.props'

export function Sidebar({ className }) {
  return (
    <div className={className}>
      Under construction{' '}
      <span role="img" aria-label="emoji">
        🙂
      </span>
    </div>
  )
}

Sidebar.defaultProps = sidebarDefaultProps

Sidebar.propTypes = sidebarPropTypes
