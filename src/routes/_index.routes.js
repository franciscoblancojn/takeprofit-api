require('module-alias/register')

const router = require('express').Router()

router.use('/auth', require('@app/routes/auth.routes'))
router.use('/accounts', require('@app/routes/accounts.routes'))
router.use('/deposits', require('@app/routes/deposits.routes'))
router.use('/methods', require('@app/routes/methods.routes'))
router.use('/retreats', require('@app/routes/retreats.routes'))

module.exports = router
