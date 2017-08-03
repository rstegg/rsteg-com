/*global requireDb:true*/
/*eslint no-undef: "error"*/
const { models } = requireDb
const { User, Offer, Message } = models
const { path } = require('ramda')

const offerAttributes = [ 'id', 'state', 'productName', 'price', 'productId', 'userId', 'sellerId' ]
const userAttributes = [ 'id', 'username', 'image' ]

const getThreadId = action => path([ 'payload', 'threadId' ], action)

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
    where: { threadId: getThreadId(action) }
  })
    .then(messages => {
      if (socket.thread) {
        socket.leave(socket.thread)
      }
      const threadId = getThreadId(action)
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
