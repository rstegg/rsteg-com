/*Helpers*/
import { isDevelopment, isProduction, reduxDevCompose, hasReactDevTools, disableReactDevTools } from 'utils/helpers'

/*Router history middleare*/
import createHistory from 'history/createBrowserHistory'
export const history = createHistory()

import { routerMiddleware } from 'react-router-redux'
const routingMiddleware = routerMiddleware(history)

/*Redux-observable middleware*/
import rootEpic from './redux/epics'
import { createEpicMiddleware } from 'redux-observable'
const epicMiddleware = createEpicMiddleware(rootEpic)

/*Redux*/
import { applyMiddleware, createStore, compose } from 'redux'

const composeEnhancers =
  isDevelopment ? reduxDevCompose || compose
  : compose

if (isProduction && hasReactDevTools) {
  disableReactDevTools()
}

import rootReducer from './redux/reducers'

const store = createStore(
  rootReducer,
  undefined,
  composeEnhancers(
    applyMiddleware(
      epicMiddleware,
      routingMiddleware
    )
  )
)

if (isDevelopment) {
  if (module.hot) {
    module.hot.accept('./redux/reducers/index', () =>
      store.replaceReducer(require('./redux/reducers/index'))
    )
  }
}

export default store
