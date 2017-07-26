const router = require('express').Router()
const passport = apiRequire('service/auth')
const { allPass, pipe, path } = require('ramda')

const createBlogPost = require('./handlers/create')
const editBlogPost = require('./handlers/edit')
const getAllBlogPosts = require('./handlers/getAll')
const getSingleBlogPost = require('./handlers/getSingle')

const validateBody = apiRequire('middleware/validate-body')
const validFields = apiRequire('middleware/valid-fields')

const validPost = validFields('post', ['title', 'slug', 'keywords', 'text', 'image'])

module.exports =
  router
    .get('/',
      getAllBlogPosts
    )
    .get('/:id',
      getSingleBlogPost
    )
    .use(passport.authenticate('jwt', { session: false }))
    .put('/:id',
      validateBody(validPost),
      editBlogPost
    )
    .post('/',
      validateBody(validPost),
      createBlogPost
    )
