/*global requireDb:true*/
/*eslint no-undef: "error"*/
const { models } = requireDb
const { User } = models

module.exports = (req, res) =>
  User.update(
    { image: req.file.location },
    { where: { id: req.user.id },
      returning: true,
      plain: true
    })
    .then(profile => res.status(200).json({ image: profile.image }))
    .catch(error => res.status(400).json({ error }))
