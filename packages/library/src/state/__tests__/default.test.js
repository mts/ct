import { getAppDefaultStateFromData } from '../default'

jest.mock('../../environment', () => ({
  isRunningOnLocalHostViaPort: false,
  isRunningOnLocalHostViaDomain: false,
  isRunningOnGitHubPages: false,
  windowObjectExists: false,
}))

const environmentMockObject = require('../../environment')

describe('default', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('getAppDefaultStateFromData()', () => {
    test('must return context default state with default values', () => {
      environmentMockObject.isRunningOnLocalHostViaDomain = true

      const defaultState = getAppDefaultStateFromData({
        isRunningOnHeroku: false,
      })

      expect(defaultState.context).toMatchObject({
        isRunningOnLocalHost: true,
        isRunningOnGitHubPages: false,
        isRunningOnHeroku: false,
      })
    })

    test('must return context default state with given values', () => {
      environmentMockObject.isRunningOnLocalHostViaDomain = false

      const defaultState = getAppDefaultStateFromData({
        isRunningOnLocalHost: false,
        isRunningOnGitHubPages: true,
        isRunningOnHeroku: false,
      })

      expect(defaultState.context).toMatchObject({
        isRunningOnLocalHost: false,
        isRunningOnGitHubPages: true,
        isRunningOnHeroku: false,
      })
    })

    test('must return api default state ', () => {
      const defaultState = getAppDefaultStateFromData({
        isRunningOnHeroku: false,
      })

      expect(defaultState.api).toMatchObject({
        webSocket: {
          counter: -1,
        },
      })
    })

    test('must return ui default state ', () => {
      const defaultState = getAppDefaultStateFromData({
        isRunningOnHeroku: false,
      })

      expect(defaultState.ui).toMatchObject({})
    })
  })
})
