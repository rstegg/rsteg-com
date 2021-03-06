/*global requireDb:true*/
/*eslint no-undef: "error"*/
const { models } = requireDb
const { Post, User } = models

const { path } = require('ramda')

const postAttributes = [ 'id', 'title', 'slug', 'preview', 'keywords', 'text', 'image' ]

const getId = path([ 'params', 'id' ])

module.exports = (req, res) =>
  Post.findOne({
    where: { slug: getId(req) },
    attributes: postAttributes
  })
    .then(post =>
      !post ? Promise.reject('invalid post')
        : post
    )
    .then(post => res.status(200).json({ post }))
    .catch(error => res.status(400).json({ error }))
