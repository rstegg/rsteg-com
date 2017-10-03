/*global requireDb:true*/
/*eslint no-undef: "error"*/
const { models } = requireDb
const { Post } = models

const { path, pick } = require('ramda')

const postAttributes = [ 'title', 'slug', 'preview', 'keywords', 'text', 'image' ]
const resAttributes = [ 'id', 'title', 'slug', 'preview', 'keywords', 'text', 'image' ]

const getPost = p => path([ 'body', 'post', p ])
const getSlug = getPost('slug')
const getSecret = getPost('secret')

const getId = path([ 'params', 'id' ])

const sanitizeSlug = slug =>
    slug
      .replace("'", '')
      .replace(/[^a-z0-9]/gi, '-')
      .toLowerCase()
      .trim()

const authorize = req =>
  new Promise((res, rej) => getSecret(req) !== process.env.BLOG_ADMIN_SECRET ? rej('bad secret') : res(req))

const validate = req =>
  req.body.slug === 'new' ? Promise.reject('bad slug')
  : Post.findOne({
      where: { slug: getSlug(req), id: { $ne: getId(req) } }
    })
      .then(post =>
        post ?
          Promise.reject('slug exists')
          : req.body.post
      )

module.exports = (req, res) =>
  authorize(req)
    .then(validate)
    .then(post => Post.update(
      pick(postAttributes, post),
      { where: { id: getId(req) }, returning: true, raw: true }
    ))
    .then(([ n, [ savedPost ] ]) => res.status(200).json({ post: pick(resAttributes, savedPost) }))
    .catch(error => { console.log(error); res.status(400).json({ error }) })
