import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { ConnectedRouter as Router } from 'react-router-redux'

import RootLayout from 'layouts/RootLayout'

import Home from './pages/Home'
import Medias from './pages/Medias'
import BlogRouter from './pages/Blog/Router'
import AboutRouter from './pages/About/Router'
import ProjectsRouter from './pages/Projects/Router'

import store, { history } from './store'

const RootRouter = () =>
  <Provider store={store}>
    <Router history={history}>
      <RootLayout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/projects' component={ProjectsRouter} />
          <Route path='/medias' component={Medias} />
          <Route path='/blog' component={BlogRouter} />
          <Route path='/about' component={AboutRouter} />
        </Switch>
      </RootLayout>
    </Router>
  </Provider>

export default RootRouter
