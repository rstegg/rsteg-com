const { models } = requireDb
const { User } = models
const jwt = require('jsonwebtoken')

const crypto = require('crypto')
const mailcomposer = require('mailcomposer')
const shortId = require('shortid')

// const { confirmationMail, sendConfirmation } = apiRequire('service/mail')

const { not, merge, path, pick, pipe, reduceWhile } = require('ramda')

const bytes = (n) => crypto.randomBytes(n).toString('hex')

const ipFields = [
  ['ip'],
  ['headers', 'x-forwarded-for'],
  ['connection', 'remoteAddress'],
  ['socket', 'remoteAddress'],
  ['connection', 'socket', 'remoteAddress']
]

const getIp = (req) => reduceWhile(not, (acc, p) => path(p, req), '', ipFields) || ''

const createPermalink = (email) =>
  `${email}${bytes(4)}`
      .toLowerCase()
      .replace(' ', '')
      .replace(/[^\w\s]/gi, '')
      .trim()

const validate = req =>
  User.findOne({
      where: { email: req.body.user.email }
  })
  .then(user =>
      user ?
        Promise.reject('email registered')
        : User.findOne({ where: { username: req.body.user.username } })
  )
  .then(user =>
      user ?
        Promise.reject('username taken')
        : req.body.user
  )

module.exports = (req, res) => {
    validate(req)
      .then((validatedUser) => {
        const salt = (Math.floor(Math.random() * 1000000000)).toString(36)
        const hash = crypto.createHash('md5').update(validatedUser.password + salt).digest('hex')
        const user = merge({
          password: hash,
          salt,
          ip_address: getIp(req),
          verified: false,
          permalink: createPermalink(validatedUser.email),
          verify_token: bytes(20)
        }, pick(['email', 'username'], validatedUser))
        return User.create(user, { plain: true })
      })
      .then(createdUser => {
        const { permalink, verify_token } = createdUser
        const permalink_url = `https://rsteg.com/api/v1/auth/signup/email_confirmation/${permalink}/${verify_token}`
        // const mail = confirmationMail(createdUser, permalink_url)
        // sendConfirmation(mail, createdUser)
        const resUser = pick(['id', 'email', 'username'], createdUser) //TODO: remove sending of userID, change userId checks to username (frontend)
        const token = jwt.sign({ id: createdUser.id }, process.env.JWT_SECRET)
        return res.status(200).json({user: resUser, token})
      })
      .catch(error => res.status(400).json({error}))
}
