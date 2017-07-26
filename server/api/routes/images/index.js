const passport = apiRequire('service/auth')

const router = require('express').Router()

const AWS = require('aws-sdk')
const multer = require('multer')
const imager = require('multer-imager')
const shortId = require('shortid')

const uploadProfileImage = require('./handlers/uploadProfileImage')
const uploadPostImage = require('./handlers/uploadPostImage')

const upload = multer({
  storage: imager({
    dirname: 'avatars',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'us-east-1',
    bucket: 'payup-storage',
    acl: 'public-read',
    contentType: imager.AUTO_CONTENT_TYPE,
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    filename: (req, file, cb) => {
      cb(null, shortId.generate() + '__' + Date.now().toString())
    },
    gm: {
      format: 'png',
      width: 250,
      height: 250,
      options: '%@'
    }
  })
})

const success =
  (req, res) => res.status(200).json({image: req.file.location})

module.exports =
  router
    .use(passport.authenticate('jwt', { session: false }))
    .post('/profile',
      upload.single('image'),
      uploadProfileImage
    )
    .post('/post',
      upload.single('image'),
      (req, res) => res.status(200).json({image: req.file.location})
    )
    .post('/post/:id',
      upload.single('image'),
      uploadPostImage
    )
