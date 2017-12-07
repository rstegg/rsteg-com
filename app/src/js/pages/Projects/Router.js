import React from 'react'
import { Route, Switch } from 'react-router'

import ProjectsLayout from 'layouts/Projects'
import ProjectDetailsLayout from 'layouts/ProjectDetails'

import ProjectsList from './'
import Excite from './Excite'

const ProjectDetailsRouter = () =>
  <ProjectDetailsLayout>
    <Switch>
      <Route exact path='/projects/excite-riverside' component={Excite} />
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
