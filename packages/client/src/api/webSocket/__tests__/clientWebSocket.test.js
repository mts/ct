import { initiateWebSocket } from '../clientWebSocket'

jest.mock('../../../../../library/src/server/webSocket', () => {
  return {
    counterDefault: 5,
  }
})

const libraryServerWebSocketMockObject = require('../../../../../library/src/server/webSocket')

describe('clientWebSocket', () => {
  const consoleLogMockFn = jest.fn()
  const dispatchMockFn = jest.fn()
  const actionMockObject = { someType: 'some-type', someAction: 'some-action' }
  const apiWebSocketSetCounterActionMockFn = jest.fn(() => actionMockObject)
  const eventMockObject = { data: 'some-data' }
  const errorMockObject = { somError: 'some-error' }

  beforeEach(() => {
    jest.spyOn(window.console, 'log').mockImplementation(consoleLogMockFn)
  })

  afterEach(() => jest.clearAllMocks())

  describe('initiateWebSocket()', () => {
    describe('onopen()', () => {
      test('must log progress and dispatch appropriate action', () => {
        const webSocket = initiateWebSocket(dispatchMockFn, apiWebSocketSetCounterActionMockFn)
        webSocket.onopen(eventMockObject)

        expect(consoleLogMockFn).toHaveBeenCalledWith('connection established')
        expect(apiWebSocketSetCounterActionMockFn).toHaveBeenCalledWith(libraryServerWebSocketMockObject.counterDefault)
        expect(dispatchMockFn).toHaveBeenCalledWith(actionMockObject)
        expect(consoleLogMockFn).toHaveBeenCalledWith(`counter initiated ~ ${libraryServerWebSocketMockObject.counterDefault}`)
      })
    })

    describe('onerror()', () => {
      test('must log progress', () => {
        const webSocket = initiateWebSocket(dispatchMockFn, apiWebSocketSetCounterActionMockFn)
        webSocket.onerror(errorMockObject)

        expect(consoleLogMockFn).toHaveBeenCalledWith(`error occurred ~ ${JSON.stringify(errorMockObject)}`)
      })
    })

    describe('onmessage()', () => {
      test('must log progress and dispatch appropriate action', () => {
        const webSocket = initiateWebSocket(dispatchMockFn, apiWebSocketSetCounterActionMockFn)
        eventMockObject.data = libraryServerWebSocketMockObject.counterDefault
        webSocket.onmessage(eventMockObject)

        expect(apiWebSocketSetCounterActionMockFn).toHaveBeenCalledWith(libraryServerWebSocketMockObject.counterDefault)
        expect(dispatchMockFn).toHaveBeenCalledWith(actionMockObject)
        expect(consoleLogMockFn).toHaveBeenCalledWith(`counter received ~ ${eventMockObject.data}`)
        expect(consoleLogMockFn).toHaveBeenCalledWith(`counter confirmed ~ ${libraryServerWebSocketMockObject.counterDefault}`)
      })
    })

    describe('onclose()', () => {
      test('must log progress', () => {
        const webSocket = initiateWebSocket(dispatchMockFn, apiWebSocketSetCounterActionMockFn)
        webSocket.onclose(eventMockObject)

        expect(consoleLogMockFn).toHaveBeenCalledWith('connection closed')
      })
    })
  })
})
