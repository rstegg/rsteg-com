const { models } = requireDb
const { Post } = models

module.exports = (req, res) =>
  Post.findAll()
  .then(posts => res.status(200).json({posts}))
  .catch(error => res.status(400).json({error}))
