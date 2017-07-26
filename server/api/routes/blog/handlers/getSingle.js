const { models } = requireDb
const { Post, User } = models

const { pick } = require('ramda')

const postAttributes = ['id', 'title', 'slug', 'keywords', 'text', 'image', 'userId']

module.exports = (req, res) =>
  Post.findOne({
    include: [
      {
        model: User,
        attributes: ['image', 'username']
      }
    ],
    where: { slug: req.params.id },
    attributes: postAttributes
  })
  .then(post =>
    !post ? Promise.reject('invalid post')
    : post
  )
  .then(post => res.status(200).json({post}))
  .catch(error => res.status(400).json({error}))
