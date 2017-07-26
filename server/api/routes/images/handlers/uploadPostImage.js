const { models } = requireDb
const { Post } = models

module.exports = (req, res) =>
  Post.update(
    { image: req.file.location },
    { where: { slug: req.params.id, userId: req.user.id },
      returning: true,
      plain: true
  })
  .then(profile => res.status(200).json({image: req.file.location}))
  .catch(error => res.status(400).json({error}))
