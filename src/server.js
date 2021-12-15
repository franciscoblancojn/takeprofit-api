const app = require('@app/api')
const env = require("@app/env")
const server = require('http').createServer(app)

const whitelist = env.WHITELIST.split(",,,")

const io = require('socket.io')(server, {
  cors: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
})

app.set('socketio', io)

io.on('connection', socket => {
  console.log('[SOCKET]:: Conected by =>', socket.id)
})

server.listen(app.get('port'), () => {
  console.log(`server on port: ${app.get('port')}`)
})
