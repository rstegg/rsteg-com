const sendThreadChatMessage = require('./message/sendmessage')
const fetchThreadChatMessages = require('./message/fetchall')
const joinChatThread = require('./threads/join')

const actionTypes = {
  'WS/FETCH_THREAD_CHAT_MESSAGES': fetchThreadChatMessages,
  'WS/JOIN_THREAD': joinChatThread,
  'WS/SEND_THREAD_CHAT_MESSAGE': sendThreadChatMessage
}

module.exports = (io, socket, action) => {
  if (!action.type) {
    throw new Error('Action type missing')
  }
  if (!actionTypes[action.type]) {
    throw new Error('Invalid action type')
  }
  const actionHandler = actionTypes[action.type]
  return actionHandler(io, socket, action)
}
