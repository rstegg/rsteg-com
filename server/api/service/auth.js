/*global requireDb:true*/
/*eslint no-undef: "error"*/
const { models } = requireDb
const { User } = models

const passport = require('passport')

const passportJWT = require('passport-jwt')
const passportLocal = require('passport-local')

const { ExtractJwt, Strategy: JwtStrategy } = passportJWT
const { Strategy: LocalStrategy } = passportLocal

const localStrategy = new LocalStrategy(
  { session: false },
  (username, password, done) =>
    User.findOne({ where: { username } })
      .then(user =>
        !user ? done(null, false, { message: 'Incorrect username' })
          : !user.validPassword(password) ? done(null, false, { message: 'Incorrect password' })
            : done(null, user)
      )
      .catch(() => done(null, false, { message: 'Incorrect username or password' }))
)

const jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader()
jwtOptions.secretOrKey = process.env.JWT_SECRET
jwtOptions.ignoreExpiration = true

const jwtStrategy = new JwtStrategy(jwtOptions,
  (jwtPayload, done) =>
    User.findById(jwtPayload.id)
      .then(user =>
        !user ? done(null, false, { error: 'Invalid token' })
          : done(null, user)
      )
      .catch(err => done(err))
)

passport.use(jwtStrategy)
passport.use(localStrategy)

module.exports = passport
