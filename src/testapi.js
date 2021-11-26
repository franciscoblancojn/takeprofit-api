const express = require('express')
const app = express()

const port = 8080
const cors = require('cors')
app.use(cors({
  origin: '*'
}))
app.use(express.json({extended:false}))

app.set('port', port)

app.use('*', (req, res) => {
  res.status(404).send({ status: 404, msg: "this endpoint doesn't exist", type: 'error', code: 404 })
})

app.listen(app.get('port'), () => {
  console.log(`server on port: ${app.get('port')}`)
})
