/*global requireDb:true*/
/*eslint no-undef: "error"*/
const { models } = requireDb
const { Post } = models

const postAttributes = [ 'id', 'title', 'slug', 'keywords', 'preview', 'image', 'updatedAt' ]

module.exports = (req, res) =>
  Post.findAll({ attributes: postAttributes })
    .then(posts => res.status(200).json({ posts: posts.sort((prev, curr) => curr.updatedAt - prev.updatedAt) }))
    .catch(error => res.status(400).json({ error }))
