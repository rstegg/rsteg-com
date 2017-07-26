const { models } = requireDb
const { Post } = models

const shortId = require('shortid')

const { allPass, merge, path, pick, pipe, isNil } = require('ramda')

const postAttributes = ['title', 'slug', 'keywords', 'text', 'image']

const getValidSlug = (slug, id) =>
  new Promise(resolve =>
    Post.findOne({
      where: { slug, id: {
          $ne: id
      }}
    })
    .then(post =>
      !post ? resolve(slug)
      : resolve(getValidSlug(Post, `${slug}-${shortId.generate().slice(0,1)}`))
    )
  )

const validate = req => {
  const slug =
    req.body.post.name
      .replace("'", '')
      .replace(/[^a-z0-9]/gi, '-')
      .toLowerCase()
      .trim()

  return getValidSlug(slug, req.params.id)
}

module.exports = (req, res) => {
  validate(req)
    .then(slug => {
      const updatedPost = merge({
        slug
      }, pick(postAttributes, req.body.post))
      return Post.update(updatedPost, { where: { slug: req.params.id, userId: req.user.id }, returning: true, plain: true })
    })
    .then(savedPost => {
      const post = pick(['id', 'name', 'description', 'isPublic', 'slug', 'image', 'user', 'userId'], savedPost[1])
      res.status(200).json({post})
    })
    .catch(error => res.status(400).json({error}))
}
