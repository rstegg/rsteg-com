import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import user from './user'
import blog from './blog'

export default combineReducers({
  user,
  blog,
  form: formReducer,
  router: routerReducer
})
