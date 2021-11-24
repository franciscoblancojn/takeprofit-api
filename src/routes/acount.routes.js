require('module-alias/register')
const router = require('express').Router()
const fmiddlewares = require('fmiddlewares')
const {} = require('@app/middlewares/_index')
const {} = require('@app/controllers/acounts/_index')

router.get(
  '/',
  [
    fmiddlewares.validateItem()
  ],
  
)

module.exports = router
