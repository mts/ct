/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { NotFoundTemplate } from '../NotFoundTemplate'

const props = {
  location: {
    pathname: 'some-path-name',
  },
}

export const defaultRender = <NotFoundTemplate {...props} />
/* eslint-enable react/jsx-props-no-spreading */
