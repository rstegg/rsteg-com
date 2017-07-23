const { models } = rootRequire('db')
const { User, Offer, Message } = models
const { path } = require('ramda')

const offerAttributes = [ 'id', 'state', 'productName', 'price', 'productId', 'userId', 'sellerId' ]
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
  .then(messages => {
    if (socket.thread) {
      socket.leave(socket.thread)
    }
    socket.join(threadId)
    socket.thread = threadId
    socket.emit('action', {
      type: 'JOIN_THREAD_SUCCESS',
      payload: {
        messages,
        threadId
      }
    })
  })
  .catch(err => console.error(err))
