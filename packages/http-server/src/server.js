/* eslint no-console: 0 */
import dotenv from 'dotenv'
import cors from 'cors'
import express from 'express'
import winston from 'winston'
import expressWinston from 'express-winston'

dotenv.config()

const server = express()

server.use(
  expressWinston.logger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(winston.format.colorize(), winston.format.json()),
    meta: false,
    msg: 'HTTP {{req.method}} {{req.url}}',
    expressFormat: true,
    colorize: false,
    ignoreRoute() {
      return false
    },
  }),
)

server.use(cors())

const PORT = process.env.PORT || 3001

server.listen(PORT, () => {
  console.log(`🚀 MTS HTTP Server listening on port ${PORT}`)
})
