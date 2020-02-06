import React from 'react'
import cx from 'classnames'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { homeTemplate } from './HomeTemplate.scss'
import { homeTemplateDefaultProps, homeTemplatePropTypes } from './HomeTemplate.props'

export function Component({ className, counter }) {
  return <div className={cx(className, homeTemplate)}>{`Counter ${counter}`}</div>
}

Component.defaultProps = homeTemplateDefaultProps

Component.propTypes = homeTemplatePropTypes

export const HomeTemplate = connect(
  ({
    api: {
      webSocket: { counter },
    },
  }) => ({
    counter,
  }),
  dispatch => bindActionCreators({}, dispatch),
)(Component)
