import React from 'react'
import { Route, Switch } from 'react-router'

import BlogLayout from 'layouts/Blog'

import List from './List'
import New from './New'
import Post from './Post'
import Edit from './Edit'

const AboutRouter = () =>
  <BlogLayout>
    <Switch>
      <Route exact path='/blog' component={List} />
      <Route exact path='/blog/new' component={New} />
      <Route exact path='/blog/:slug/edit' component={Edit} />
      <Route exact path='/blog/:slug' component={Post} />
    </Switch>
  </BlogLayout>

export default AboutRouter
