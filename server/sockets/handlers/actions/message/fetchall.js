const jwt = require('jsonwebtoken')
const { path } = require('ramda')

const { models } = rootRequire('db')
const { User, Offer, Message } = models

const offerAttributes = [ 'id', 'state', 'productName', 'price', 'sellerId' ]
const userAttributes = [ 'id', 'username', 'image' ]

module.exports = (io, socket, action) =>
  Message.findAll({
    include: [
      {
        model: Offer,
        attributes: offerAttributes
      },
      {
        model: User,
        attributes: userAttributes
      }
    ],
    where: { threadId: path([ 'payload', 'threadId' ], action) }
  })
  .then(messages =>
    socket.emit('action', {
      type: 'RECEIVE_THREAD_CHAT_MESSAGES',
      payload: {
        messages
      }
    })
  )
  .catch(err => console.error(err))
