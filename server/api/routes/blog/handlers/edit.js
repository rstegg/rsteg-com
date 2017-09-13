/*global requireDb:true*/
/*eslint no-undef: "error"*/
const { models } = requireDb
const { Post } = models

const { path, pick } = require('ramda')

const postAttributes = [ 'title', 'slug', 'preview', 'keywords', 'text', 'image' ]
const resAttributes = [ 'id', 'title', 'slug', 'preview', 'keywords', 'text', 'image' ]

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
    .then(post => Post.update(
      pick(postAttributes, post),
      { where: { id: getId(req), userId: getUserId(req) }, returning: true, plain: true }
    ))
    .then(([ n, [ savedPost ] ]) => res.status(200).json({ post: pick(resAttributes, savedPost) }))
    .catch(error => res.status(400).json({ error }))
