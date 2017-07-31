const { models } = requireDb
const { Post } = models

const shortId = require('shortid')

const { allPass, merge, path, pick, pipe, isNil } = require('ramda')

const postAttributes = ['title', 'slug', 'keywords', 'preview', 'text', 'image']

const getUser = p => path([ 'user', p ])
const getUserId = getUser('id')

const getPost = p => path([ 'body', 'post', p ])
const getSlug = getPost('slug')

const validate = req =>
  Post.findOne({
    where: { slug: getSlug(req) }
  })
  .then(post =>
    post ?
      Promise.reject('slug exists')
      : req.body.post
  )

module.exports = (req, res) =>
  validate(req)
    .then(post => {
      const newPost = merge({
        userId: getUserId(req)
      }, pick(postAttributes, post))
      return Post.create(newPost, { plain: true })
    })
    .then(post => res.status(200).json({post}))
    .catch(error => res.status(400).json({error}))
