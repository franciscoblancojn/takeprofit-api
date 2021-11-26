const express = require('express')
const app = express()

const port = 5050
const cors = require('cors')
app.use(cors({
  origin: '*'
}))

app.set('port', port)

app.use('*', (req, res) => {
  res.status(404).send({ status: 404, msg: "this endpoint doesn't exist", type: 'error', code: 404 })
})

const server = require('http').createServer(app)
server.listen(app.get('port'), () => {
  console.log(`server on port: ${app.get('port')}`)
})
