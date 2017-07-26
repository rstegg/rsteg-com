const { models } = requireDb
const { Post } = models

const shortId = require('shortid')

const { allPass, merge, path, pick, pipe, isNil } = require('ramda')

const postAttributes = ['title', 'slug', 'keywords', 'text', 'image']

const getValidSlug = slug =>
  new Promise(resolve =>
    Post.findOne({
      where: { slug }
    })
    .then(post =>
      post ?
        resolve(getValidSlug(`${slug}-${shortId.generate().slice(0,1)}`))
        : resolve({slug})
    )
  )

const validate = req => {
  const slug =
    req.body.post.title
      .replace("'", '')
      .replace(/[^a-z0-9]/gi, '-')
      .toLowerCase()
      .trim()

  return getValidSlug(slug)
}

module.exports = (req, res) =>
  validate(req)
    .then(({slug}) => {
      const newPost = merge({
        userId: req.user.id,
        slug
      }, pick(postAttributes, req.body.post))
      return Post.create(newPost, { plain: true })
    })
    .then(post => res.status(200).json({post}))
    .catch(error => res.status(400).json({error})) //TODO: return custom error handling
