const { models } = rootRequire('db')
const { User, Message } = models
const { pipe, prop, path, length } = require('ramda')

const authorizeJWT = socketRequire('helpers/authorizeJWT')

const userAttributes = [ 'id', 'username', 'avatar' ]

const getPayload = prop('payload')
const getUser = prop('user')
const getId = prop('id')
const getText = prop('text')
const getThreadId = prop('threadId')

const getPayloadUserId = pipe(
  getPayload,
  getUser,
  getId
)
const getPayloadThreadId = pipe(
  getPayload,
  getThreadId
)
const getPayloadText = pipe(
  getPayload,
  getText
)

const getImage = pipe(
  getPayloadUser,
  prop('avatar')
)
const getUsername = pipe(
  getPayloadUser,
  prop('username')
)

const constructMessage = action => ({
  text: getPayloadText(action),
  username: getPayloadUsername(action),
  avatar: getPayloadImage(action),
  contentType: 'text',
  userId: getsocket.userId,
  threadId: getPayloadThreadId(action)
})

module.exports = (io, socket, action) =>
  authorizeJWT(action)
    .then(token =>
      Message.create(constructMessage(action), { plain: true })
        .then(savedMessage =>
          Message.findOne({
            include: [
              {
                model: User,
                attributes: userAttributes
              }
          ],
            where: { id: savedMessage.id }
          })
        )
        .then(message =>
          io.to(threadId).emit('action', {
            type: 'RECEIVE_THREAD_CHAT_MESSAGE',
            payload: {
              message
            }
          })
        )
        .catch(err => console.log('send err', err))
    )
