import React from 'react'
import cx from 'classnames'
import {
  layout,
  layoutMainStory,
  layoutMainStoryImage,
  layoutMainStoryIntro,
  layoutSubStoryList,
  layoutSubStoryListItem,
  layoutSubStoryListItemImage,
  layoutSubStoryListItemIntro,
} from './Layout.scss'
import { layoutDefaultProps, layoutPropTypes } from './Layout.props'

export function Layout({ className }) {
  return (
    <div className={cx(className, layout)}>
      <h1>Make This Responsive</h1>

      <p>While maintaining the heirarchy of importance.</p>

      <article className={layoutMainStory}>
        <img
          className={layoutMainStoryImage}
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c4c0230e-617c-4870-b158-1cb768fe3045/d1wzfmg-1c8d8335-f37f-44f6-a463-2ace88617de6.jpg/v1/fill/w_1173,h_681,q_70,strp/she_ra_by_nebezial_d1wzfmg-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTI5IiwicGF0aCI6IlwvZlwvYzRjMDIzMGUtNjE3Yy00ODcwLWIxNTgtMWNiNzY4ZmUzMDQ1XC9kMXd6Zm1nLTFjOGQ4MzM1LWYzN2YtNDRmNi1hNDYzLTJhY2U4ODYxN2RlNi5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Io2zCTwgtYJ2Zl2nNHvyjji31ONmF4uZxz5DYwnwLtg"
          alt="Sha Ra Rocking"
        />
        <div className={layoutMainStoryIntro}>
          <h1>Most Important Story</h1>
          <p>This article has the most visual weight.</p>
        </div>
      </article>

      <section className={layoutSubStoryList}>
        <article className={layoutSubStoryListItem}>
          <img className={layoutSubStoryListItemImage} src="http://placebear.com/250/350" alt="" />
          <div className={layoutSubStoryListItemIntro}>
            <h2>Less Important Story</h2>
            <p>This story has less visual weight.</p>
          </div>
        </article>

        <article className={layoutSubStoryListItem}>
          <img className={layoutSubStoryListItemImage} src="http://placekitten.com/250/350" alt="" />
          <div className={layoutSubStoryListItemIntro}>
            <h2>Less Important Story</h2>
            <p>This story has less visual weight.</p>
          </div>
        </article>

        <article className={layoutSubStoryListItem}>
          <img className={layoutSubStoryListItemImage} src="http://placebear.com/250/350" alt="" />
          <div className={layoutSubStoryListItemIntro}>
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
