require('module-alias/register')

const router = require('express').Router()

router.use('/accounts', require('@app/routes/accounts.routes'))

module.exports = router
