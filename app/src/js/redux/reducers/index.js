import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import ui from './ui'
import blog from './blog'

export default combineReducers({
  ui,
  blog,
  form: formReducer,
  router: routerReducer
})
