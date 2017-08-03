const jwt = require('jsonwebtoken')
const { path } = require('ramda')

const getToken = path([ 'payload', 'user', 'token' ])

module.exports = action =>
  new Promise((resolve, reject) =>
    !getToken(action) ? reject('no token')
      : jwt.verify(getToken(action).slice(4), process.env.JWT_SECRET, (err, token) =>
        err ? reject('bad token')
          : resolve(token)
      )
  )
