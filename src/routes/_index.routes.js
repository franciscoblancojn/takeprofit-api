require('module-alias/register')

const router = require('express').Router()

router.use('/acount', require('@app/routes/acount.routes'))

module.exports = router
