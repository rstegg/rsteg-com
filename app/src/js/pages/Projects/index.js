import React from 'react'
import { NavLink } from 'react-router-dom'

import Card from 'elements/Card'

const ProjectsList = () =>
  <div className='projects'>
    <Card as={NavLink} to='/projects/excite-riverside' className='card projects-card'>
      <Card.Header>
        <Card.Title>Excite Riverside - A Unique Accceleration Program</Card.Title>
      </Card.Header>
      <Card.Content>
        <Card.Image src='/images/excite-preview.png' />
      </Card.Content>
    </Card>
  </div>

export default ProjectsList
