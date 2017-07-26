const router = require('express').Router()

const auth = require('./auth')
const account = require('./account')
const images = require('./images')
const blog = require('./blog')

module.exports =
  router
    .use('/auth', auth)
    .use('/account', account)
    .use('/image', images)
    .use('/blog', blog)
