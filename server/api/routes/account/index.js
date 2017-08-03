/*global apiRequire:true*/
/*eslint no-undef: "error"*/
const router = require('express').Router()
const passport = apiRequire('service/auth')

const editAccountHandler = require('./handlers/edit')
const getAccountHandler = require('./handlers/get')

const validateBody = apiRequire('middleware/validate-body')
const validFields = apiRequire('middleware/valid-fields')

const validAccountUser = validFields('account', [ 'name', 'email', 'username', 'oldPassword' ])

module.exports =
  router
    .use(passport.authenticate('jwt', { session: false }))
    .get('/',
      getAccountHandler
    )
    .put('/',
      validateBody(validAccountUser),
      editAccountHandler
    )
