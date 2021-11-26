const express = require('express')
const app = express()

const port = 3002
const bodyParser = require('body-parser')
const cors = require('cors')
app.use(cors({
  origin: '*'
}))

app.set('port', port)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.raw())
app.use(express.urlencoded({ extended: false }))
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})

app.use('*', (req, res) => {
  res.status(404).send({ status: 404, msg: "this endpoint doesn't exist", type: 'error', code: 404 })
})

const server = require('http').createServer(app)
server.listen(app.get('port'), () => {
  console.log(`server on port: ${app.get('port')}`)
})
