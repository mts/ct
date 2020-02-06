import React from 'react'
import cx from 'classnames'
import { layoutDefaultProps, layoutPropTypes } from './Layout.props'

export function Layout({ className }) {
  return (
    <div className={cx(className)}>
      <h1>Make This Responsive</h1>

      <p>While maintaining the heirarchy of importance.</p>

      <article className="main-story">
        <img src="https://f.cl.ly/items/2e3c2a1Z0D1H3u0W2K12/shera.jpg" alt="Sha Ra Rocking" />

        <div className="story-intro">
          <h1>Most Important Story</h1>
          <p>
            This article has the most visual weight. <a href="http://nebezial.deviantart.com/art/she-ra-115867096">image source.</a>
          </p>
        </div>
      </article>

      <section className="sub-stories">
        <article className="sub-story">
          <img src="http://placekitten.com/250/350" alt="" />
          <div className="story-intro">
            <h2>Less Important Story</h2>
            <p>This story has less visual weight.</p>
          </div>
        </article>

        <article className="sub-story">
          <img src="http://placecage.com/250/350" alt="" />
          <div className="story-intro">
            <h2>Less Important Story</h2>
            <p>This story has less visual weight.</p>
          </div>
        </article>

        <article className="sub-story last">
          <img src="http://placebear.com/250/350" alt="" />
          <div className="story-intro">
            <h2>Less Important Story</h2>
            <p>This story has less visual weight.</p>
          </div>
        </article>
      </section>
    </div>
  )
}

Layout.defaultProps = layoutDefaultProps

Layout.propTypes = layoutPropTypes
