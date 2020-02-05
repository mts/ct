import React from 'react'
import { noMatchDefaultProps, noMatchPropTypes } from './NoMatch.props'

export function NoMatch({ className, location }) {
  return (
    <div className={className}>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  )
}

NoMatch.defaultProps = noMatchDefaultProps

NoMatch.propTypes = noMatchPropTypes
