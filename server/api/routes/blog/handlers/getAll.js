/*global requireDb:true*/
/*eslint no-undef: "error"*/
const { models } = requireDb
const { Post } = models

const postAttributes = [ 'id', 'title', 'slug', 'keywords', 'preview', 'image', 'userId' ]

module.exports = (req, res) =>
  Post.findAll({ attributes: postAttributes })
    .then(posts => res.status(200).json({ posts }))
    .catch(error => res.status(400).json({ error }))
