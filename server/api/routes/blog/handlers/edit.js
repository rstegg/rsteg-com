/*global requireDb:true*/
/*eslint no-undef: "error"*/
const { models } = requireDb
const { Post } = models

const { path, pick } = require('ramda')

const postAttributes = [ 'title', 'slug', 'preview', 'keywords', 'text', 'image' ]
const resAttributes = [ 'id', 'userId', 'title', 'slug', 'preview', 'keywords', 'text', 'image' ]

const getUser = p => path([ 'user', p ])
const getUserId = getUser('id')

const getPost = p => path([ 'body', 'post', p ])
const getSlug = getPost('slug')

const getId = path([ 'params', 'id' ])

const validate = req =>
  Post.findOne({
    where: { slug: getSlug(req), id: { $ne: getId(req) } }
  })
    .then(post =>
      post ? Promise.reject('slug exists')
        : req.body.post
    )

module.exports = (req, res) =>
  validate(req)
    .then(post => {
      const updatedPost = pick(postAttributes, post)
      return Post.update(updatedPost, { where: { id: getId(req), userId: getUserId(req) }, returning: true, plain: true })
    })
    .then(savedPost => {
      const post = pick(resAttributes, savedPost[1])
      res.status(200).json({ post })
    })
    .catch(error => res.status(400).json({ error }))
