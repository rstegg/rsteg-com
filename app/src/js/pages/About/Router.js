import React from 'react'
import { Route, Switch } from 'react-router'

import AboutLayout from 'layouts/About'

import Languages from './Languages'
import Interests from './Interests'
import Summary from './Summary'
import Contact from './Contact'

const AboutRouter = () =>
  <AboutLayout>
    <Switch>
      <Route exact path='/about/languages' component={Languages} />
      <Route exact path='/about/interests' component={Interests} />
      <Route exact path='/about/summary' component={Summary} />
      <Route exact path='/about/contact' component={Contact} />
    </Switch>
  </AboutLayout>

export default AboutRouter
