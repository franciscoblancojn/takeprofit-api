require('module-alias/register')

const router = require('express').Router()

router.use('/accounts', require('@app/routes/accounts.routes'))
router.use('/deposits', require('@app/routes/deposits.routes'))
router.use('/methods', require('@app/routes/methods.routes'))

module.exports = router
