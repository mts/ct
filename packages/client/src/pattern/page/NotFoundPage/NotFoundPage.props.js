import { string, object } from 'prop-types'

export const notFoundPageDefaultProps = {
  className: '',
}

export const notFoundPagePropTypes = {
  className: string,
  location: object.isRequired,
}
