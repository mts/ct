import React from 'react'
import cx from 'classnames'
import {
  sidebar,
  sidebarHeader,
  sidebarContent,
  sidebarContentSection,
  sidebarContentSectionArticle,
  sidebarContentAside,
  sidebarFooter,
} from './Sidebar.scss'
import { sidebarDefaultProps, sidebarPropTypes } from './Sidebar.props'

export function Sidebar({ className }) {
  return (
    <main className={cx(className, sidebar)}>
      <header className={sidebarHeader}>
        <h1>Site</h1>
      </header>
      <div className={sidebarContent}>
        <section className={sidebarContentSection}>
          <article className={sidebarContentSectionArticle}>
            <h2>Title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo molestias ex officia eligendi reiciendis fuga magnam? Ullam ut
              ab doloremque accusamus iusto aliquam facilis sapiente!
            </p>
          </article>
          <article className={sidebarContentSectionArticle}>
            <h2>Title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo molestias ex officia eligendi reiciendis fuga magnam? Ullam ut
              ab doloremque accusamus iusto aliquam facilis sapiente!
            </p>
          </article>
        </section>
        <aside className={sidebarContentAside}>
          <div className={module}>
            <h3>Module</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio rem ab delectus fugit repellendus perspiciatis dolor
              consequuntur tenetur voluptatem a vitae odit aspernatur? Voluptas quisquam corporis nostrum aspernatur aliquid harum saepe ab
              pariatur veniam iste ipsam alias nemo voluptatibus doloribus.
            </p>
          </div>
        </aside>
      </div>
      <footer className={sidebarFooter}>
        <h1>About</h1>
      </footer>
    </main>
  )
}

Sidebar.defaultProps = sidebarDefaultProps

Sidebar.propTypes = sidebarPropTypes
