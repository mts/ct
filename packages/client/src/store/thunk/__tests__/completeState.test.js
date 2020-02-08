import { setAppCompleteStateThunk } from '../completeState'

jest.mock('../../action/actionCreators', () => ({
  apiWebSocketSetCounterAction: () => {},
}))

jest.mock('../../../api/webSocket/clientWebSocket', () => ({
  initiateWebSocket: () => {},
}))

const actionCreatorsMockObject = require('../../action/actionCreators')
const clientWebSocketMockObject = require('../../../api/webSocket/clientWebSocket')

describe('completeState()', () => {
  const dispatchMockFn = jest.fn()
  const initiateWebSocketMockFn = jest.fn()

  beforeEach(() => {
    jest.spyOn(clientWebSocketMockObject, 'initiateWebSocket').mockImplementation(initiateWebSocketMockFn)
  })

  afterEach(() => jest.clearAllMocks())

  describe('setAppCompleteStateThunk()', () => {
    test('must call initiateWebSocket with dispatch() and apiWebSocketSetCounterAction()', async () => {
      await setAppCompleteStateThunk()(dispatchMockFn)

      await expect(initiateWebSocketMockFn).toHaveBeenCalledWith(dispatchMockFn, actionCreatorsMockObject.apiWebSocketSetCounterAction)
    })
  })
})
