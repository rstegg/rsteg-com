/*global requireDb socketRequire:true*/
/*eslint no-undef: "error"*/
const { models } = requireDb
const { User, Message } = models
const { applySpec, merge, path } = require('ramda')

const authorizeJWT = socketRequire('helpers/authorizeJWT')

const userAttributes = [ 'id', 'username', 'avatar' ]

const getPayload = p => path([ 'payload', p ])
const getPayloadUser = p => path([ 'payload', 'user', p ])

const getPayloadUserId = getPayloadUser('id')
const getPayloadUserImage = getPayloadUser('avatar')
const getPayloadUsername = getPayloadUser('username')

const getPayloadThreadId = getPayload('threadId')
const getPayloadText = getPayload('text')

const constructMessage = applySpec({
  text: getPayloadText,
  username: getPayloadUsername,
  avatar: getPayloadUserImage,
  userId: getPayloadUserId,
  threadId: getPayloadThreadId
})

module.exports = (io, socket, action) =>
  authorizeJWT(action)
    .then(token =>
      Message.create(
        merge({ contentType: 'text', userId: token.id }, constructMessage(action)), { plain: true })
        .then(newMessage =>
          Message.findOne({
            include: [
              {
                model: User,
                attributes: userAttributes
              }
            ],
            where: { id: newMessage.id }
          })
        )
        .then(message =>
          io.to(socket.thread).emit('action', {
            type: 'RECEIVE_THREAD_CHAT_MESSAGE',
            payload: {
              message
            }
          })
        )
        .catch(err => console.log('send err', err))
    )
