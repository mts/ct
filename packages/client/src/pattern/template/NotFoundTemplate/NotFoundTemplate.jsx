import React from 'react'
import { Link } from 'react-router-dom'
import { homePagePath } from '../../../route/path'
import { NoMatch } from '../../atom/info/NoMatch'
import { notFoundTemplateDefaultProps, notFoundTemplatePropTypes } from './NotFoundTemplate.props'

export function NotFoundTemplate({ className, location }) {
  return (
    <div className={className}>
      <h2>Not Found</h2>
      <NoMatch location={location} />
      <Link to={homePagePath}> Back to Home Page</Link>
    </div>
  )
}

NotFoundTemplate.defaultProps = notFoundTemplateDefaultProps

NotFoundTemplate.propTypes = notFoundTemplatePropTypes
