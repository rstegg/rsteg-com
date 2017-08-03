/*global apiRequire:true*/
/*eslint no-undef: "error"*/
const router = require('express').Router()
const passport = apiRequire('service/auth')

const createBlogPost = require('./handlers/create')
const editBlogPost = require('./handlers/edit')
const getAllBlogPosts = require('./handlers/getAll')
const getSingleBlogPost = require('./handlers/getSingle')

const validateBody = apiRequire('middleware/validate-body')
const validFields = apiRequire('middleware/valid-fields')

const validPost = validFields('post', [ 'title', 'preview', 'slug', 'text' ])

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
