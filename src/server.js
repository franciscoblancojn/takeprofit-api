const app = require('./api')
const server = require('http').createServer(app)

const io = require('socket.io')(server, {
  cors: {
    origin: '*'
  }
})

app.set('socketio', io)

io.on('connection', socket => {
  console.log('[SOCKET]:: Conected by =>', socket.id)
})

server.listen(app.get('port'), () => {
  console.log(`server on port: ${app.get('port')}`)
})
