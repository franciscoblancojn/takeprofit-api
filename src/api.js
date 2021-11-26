require('module-alias/register')
const dotenv = require('dotenv').config()
const env = dotenv.parsed
const express = require('express')
const app = express()

const port = 3001
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
app.use(cors({
  origin: '*'
}))

const morgan = require('morgan')

const routes = require('@app/routes/_index.routes')

app.set('port', port)
app.use(morgan('dev'))
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

const mode = env.MODE === 'DEV' ? '/dev' : ''

app.use(mode + '/api/v1', routes)
/**
 * use folder page for rutes not enpoints
 */
app.use("/public",express.static(path.join(__dirname, 'pages')))
app.use('*', (req, res) => {
  res.status(404).send({ status: 404, msg: "this endpoint doesn't exist", type: 'error', code: 404 })
})


/**
 * app.listen
 * @description enpoint listen
 */

module.exports = app
