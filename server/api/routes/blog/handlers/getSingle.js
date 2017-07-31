const { models } = requireDb
const { Post, User } = models

const { path } = require('ramda')

const postAttributes = [ 'id', 'title', 'slug', 'preview', 'keywords', 'text', 'image', 'userId' ]
const userAttributes = [ 'image', 'username' ]

const getUser = p => path([ 'user', p ])
const getUserId = getUser('id')

const getPost = p => path([ 'body', 'post', p ])
const getSlug = getPost('slug')

const getId = path([ 'params', 'id' ])

module.exports = (req, res) =>
  Post.findOne({
    include: [
      {
        model: User,
        attributes: userAttributes
      }
    ],
    where: { slug: getId(req) },
    attributes: postAttributes
  })
  .then(post =>
    !post ? Promise.reject('invalid post')
    : post
  )
  .then(post => res.status(200).json({post}))
  .catch(error => res.status(400).json({error}))
