import { string, object } from 'prop-types'

export const notFoundTemplateDefaultProps = {
  className: '',
}

export const notFoundTemplatePropTypes = {
  className: string,
  location: object.isRequired,
}
