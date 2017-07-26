import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { ConnectedRouter as Router } from 'react-router-redux'

import RootLayout from 'layouts/RootLayout'

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import BlogRouter from './pages/Blog/Router'
import AboutRouter from './pages/About/Router'

import store, { history } from './store'

const RootRouter = () =>
  <Provider store={store}>
    <Router history={history}>
      <RootLayout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route path='/blog' component={BlogRouter} />
          <Route path='/about' component={AboutRouter} />
        </Switch>
      </RootLayout>
    </Router>
  </Provider>

export default RootRouter
