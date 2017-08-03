/*global requireDb:true*/
/*eslint no-undef: "error"*/
const { models } = requireDb
const { User } = models

// const { mailgun } = apiRequire('service/mail')

const { pathEq } = require('ramda')

module.exports = (req, res) =>
  User.findOne({ where: { permalink: req.params.permalink } })
    .then(user =>
      !pathEq([ 'verify_token' ], req.params.verify_token, user) ?
        res.status(200).send('Invalid verification token. Please try again or contact support.')
        : User.update({ verified: true }, { where: { permalink: req.params.permalink }, returning: true, plain: true })
    )
    .then(() => res.redirect('/'))
    .catch(err => {
      console.error(err)
      res.redirect('/')
    })
