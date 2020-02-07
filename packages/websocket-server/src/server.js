/* eslint no-console: 0 */
import dotenv from 'dotenv'
import WebSocket from 'ws'

dotenv.config()

const PORT = process.env.PORT || 3001
console.log(`listening on port ${PORT}`)
const server = new WebSocket.Server({ port: PORT })

let counter = -1

server.on('connection', webSocket => {
  console.log('connection established')

  webSocket.on('message', message => {
    counter = message
    console.log(`counter received ~ ${message}`)

    if (counter > 0) {
      setTimeout(() => {
        if (webSocket.readyState === WebSocket.OPEN) {
          webSocket.send(counter - 1)
          console.log(`counter decremented ~ ${message}`)
        }
      }, 1000)
    } else {
      counter = -1
    }
  })

  webSocket.on('close', () => {
    console.log(`connection closed`)
  })
})
