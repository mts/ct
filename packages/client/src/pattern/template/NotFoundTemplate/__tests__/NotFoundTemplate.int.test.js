import React from 'react'
import { defaultRender } from './NotFoundTemplate.int.render'

jest.mock('react-router-dom', () => {
  return {
    Link: () => <div />,
  }
})

describe('<NotFoundTemplate />', () => {
  describe('Snaphot', () => {
    test('must match defaultRender', () => {
      expect(global.renderToJSON(defaultRender)).toMatchSnapshot()
    })
  })
})
