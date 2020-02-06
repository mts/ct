import { apiWebSocketSetCounterAction } from '../../action/actionCreators'

jest.mock('redux-logger', () => ({
  createLogger: () => {
    return () => next => action => next(action)
  },
}))
jest.mock('../../../../../library/src/state/default', () => ({
  getAppDefaultStateFromData: () => ({}),
}))
jest.mock('../../thunk/completeState', () => ({
  setAppCompleteStateThunk: () => async dispatch => {}, // eslint-disable-line
}))

describe('index', () => {
  afterEach(() => jest.clearAllMocks())

  describe('getAppReducer()', () => {
    describe('api state', () => {
      test('must return new state with given payload when API_WEBSOCKET_SET_COUNTER action dispatched', async () => {
        const payload = 5

        const { clientAppStore } = await import('../../client')

        clientAppStore.dispatch(apiWebSocketSetCounterAction(payload))
        expect(clientAppStore.getState().api.webSocket.counter).toEqual(payload)
      })
    })
  })
})
