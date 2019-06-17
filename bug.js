const http = require('http')
const https = require('https')
const fs = require('fs')

const WebSocket = require('ws')

const useHttps = true
let server

if (useHttps) {
  server = https.createServer({
    cert: fs.readFileSync('./cert.pem'),
    key: fs.readFileSync('./key.pem')
  })
} else {
  server = http.createServer()
}

const wss = new WebSocket.Server({ server })

function currentTimestamp () {
  return Math.round(Date.now()/1000)
}

wss.on('connection', ws => {
  const connected = currentTimestamp()
  ws.onmessage = () => {
    ws.send(currentTimestamp() - connected)
  }
})

server.listen({ port: 4000 })

