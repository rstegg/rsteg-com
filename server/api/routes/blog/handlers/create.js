/*global requireDb:true*/
/*eslint no-undef: "error"*/
const { models } = requireDb
const { Post } = models

const { merge, path, pick } = require('ramda')

const postAttributes = [ 'title', 'slug', 'keywords', 'preview', 'text', 'image' ]

const getPost = p => path([ 'body', 'post', p ])
const getSlug = getPost('slug')
const getSecret = getPost('secret')

const authorize = req =>
  new Promise((res, rej) => getSecret(req) !== process.env.BLOG_ADMIN_SECRET ? rej('bad secret') : res(req))

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
  authorize(req)
    .then(validate)
    .then(post => Post.create(pick(postAttributes, post), { plain: true }))
    .then(post => res.status(200).json({ post }))
    .catch(error => res.status(400).json({ error }))
