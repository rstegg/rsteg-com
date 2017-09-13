const router = require('express').Router()

const images = require('./images')
const blog = require('./blog')

module.exports =
  router
    .use('/image', images)
    .use('/blog', blog)
