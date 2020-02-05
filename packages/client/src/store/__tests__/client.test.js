import { mockAppState } from '../../../../library/src/state/mock'

jest.mock('redux', () => ({
  createStore: () => ({ dispatch: jest.fn() }),
  applyMiddleware: jest.fn(),
  compose: jest.fn(),
  combineReducers: jest.fn(),
}))
jest.mock('redux-logger', () => ({ createLogger: () => {} }))
jest.mock('redux-thunk', () => ({ applyMiddleware: () => {}, compose: () => {} }))
jest.mock('../../../../library/src/environment', () => ({ isRunningOnLocalHostViaDomain: true }))
jest.mock('../../../../library/src/state/default', () => ({
  getAppDefaultStateFromWindow: () => ({}),
  getAppDefaultStateFromData: () => ({}),
}))
jest.mock('../reducer', () => ({ getAppReducer: () => {} }))

const reduxMockObject = require('redux') // eslint-disable-line
const reduxLoggerMockObject = require('redux-logger') // eslint-disable-line
const reduxThunkMockObject = require('redux-thunk') // eslint-disable-line
const environmentAppMockObject = require('../../../../library/src/environment') // eslint-disable-line
const stateDefaultMockObject = require('../../../../library/src/state/default')
const reducerMockObject = require('../reducer')

describe('client', () => {
  beforeEach(() => {
    jest.spyOn(stateDefaultMockObject, 'getAppDefaultStateFromWindow').mockReturnValue(mockAppState)
    jest.spyOn(reducerMockObject, 'getAppReducer').mockImplementation(jest.fn())
  })

  afterEach(() => jest.clearAllMocks())

  describe('setAppDefaultState()', () => {
    test('must set app state', async () => {
      const { AppStore } = await import('../client')

      const clientAppStore = new AppStore()

      expect(clientAppStore.appState).toMatchObject(mockAppState)
    })
  })
})
