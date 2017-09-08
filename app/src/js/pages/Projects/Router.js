import React from 'react'
import { Route, Switch } from 'react-router'

import ProjectsLayout from 'layouts/Projects'
import ProjectDetailsLayout from 'layouts/ProjectDetails'

import ProjectsList from './'
import Kuwau from './Kuwau'
import Luvpay from './Luvpay'
import Cloudcashier from './Cloudcashier'

const ProjectDetailsRouter = () =>
  <ProjectDetailsLayout>
    <Switch>
      <Route exact path='/projects/luvpay' component={Luvpay} />
      <Route exact path='/projects/kuwau' component={Kuwau} />
      <Route exact path='/projects/cloudcashier' component={Cloudcashier} />
    </Switch>
  </ProjectDetailsLayout>

const ProjectsRouter = () =>
  <ProjectsLayout>
    <Switch>
      <Route exact path='/projects' component={ProjectsList} />
      <Route path='/projects' component={ProjectDetailsRouter} />
    </Switch>
  </ProjectsLayout>

export default ProjectsRouter
