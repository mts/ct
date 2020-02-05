import React from 'react'
import { HomeTemplate } from '../../template/HomeTemplate'
import { homePageDefaultProps, homePagePropTypes } from './HomePage.props'

export function HomePage({ className }) {
  return (
    <div className={className}>
      <HomeTemplate />
    </div>
  )
}

HomePage.defaultProps = homePageDefaultProps

HomePage.propTypes = homePagePropTypes

// Default export is required to use with React.lazy()
export default HomePage
