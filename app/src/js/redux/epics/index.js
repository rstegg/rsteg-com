import { combineEpics } from 'redux-observable'

import blogEpics from './blog'

export default combineEpics(
  blogEpics
)
