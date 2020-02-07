import { defaultRender } from './clientRenderApp.int.render'

jest.mock('react-dom', () => ({ render: () => {} }))

const reactReduxMockObject = require('react-redux') // eslint-disable-line

describe('<App />', () => {
  describe('Snaphot', () => {
    test('must match defaultRender', () => {
      expect(global.renderToJSON(defaultRender)).toMatchSnapshot()
    })
  })
})
