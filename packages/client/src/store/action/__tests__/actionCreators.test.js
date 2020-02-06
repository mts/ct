import { apiWebSocketSetCounterAction } from '../actionCreators'

describe('actionCreators', () => {
  const payload = { somePayload: 'some-payload' }

  describe('apiWebSocketSetCounterAction()', () => {
    test('must return action with given payload', () => {
      expect(apiWebSocketSetCounterAction(payload)).toMatchObject({ type: 'API_WEBSOCKET_SET_COUNTER', payload })
    })
  })
})
