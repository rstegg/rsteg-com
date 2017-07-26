const { models } = requireDb
const { Post } = models

const shortId = require('shortid')

const { allPass, merge, path, pick, pipe, isNil } = require('ramda')

const postAttributes = ['title', 'keywords', 'text', 'image']

const getValidSlug = slug =>
  Post.findOne({
    where: { slug }
  })
  .then(post =>
    post ?
      Promise.reject('slug exists')
      : slug
  )

const validate = req => {
  return getValidSlug(req.body.post.slug)
}

module.exports = (req, res) =>
  validate(req)
    .then(slug => {
      const newPost = merge({
        userId: req.user.id,
        slug
      }, pick(postAttributes, req.body.post))
      return Post.create(newPost, { plain: true })
    })
    .then(post => res.status(200).json({post}))
    .catch(error => res.status(400).json({error})) //TODO: return custom error handling
