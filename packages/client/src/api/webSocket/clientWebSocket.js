/* eslint-disable no-console, no-unused-vars */
export function initiateWebSocket(dispatch, apiWebSocketSetCounterAction) {
  const url = 'ws://localhost:3000/'

  const webSocket = new WebSocket(url)

  let counter = 10

  webSocket.onopen = event => {
    console.log('connection established')

    webSocket.send(counter)
    dispatch(apiWebSocketSetCounterAction(counter))
    console.log(`counter initiated ~ ${counter}`)
  }

  webSocket.onerror = error => {
    console.log(`error occurred ~ ${JSON.stringify(error)}`)
  }

  webSocket.onmessage = event => {
    counter = event.data
    dispatch(apiWebSocketSetCounterAction(counter))
    console.log(`counter received ~ ${event.data}`)

    webSocket.send(counter)
    console.log(`counter confirmed ~ ${counter}`)
  }

  webSocket.onclose = event => {
    console.log('connection closed')
  }
}
/* eslint-enable no-console, no-unused-vars */
