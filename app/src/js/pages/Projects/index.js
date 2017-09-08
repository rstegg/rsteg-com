import React from 'react'
import { NavLink } from 'react-router-dom'

import Card from 'elements/Card'

const ProjectsList = () =>
  <div className='projects'>
    <Card as={NavLink} to='/projects/luvpay' className='card projects-card'>
      <Card.Header>
        <Card.Title>Luvpay</Card.Title>
      </Card.Header>
      <Card.Content>
        <Card.Description>
          Collect money
        </Card.Description>
      </Card.Content>
    </Card>
    <Card as={NavLink} to='/projects/kuwau' className='card projects-card'>
      <Card.Header>
        <Card.Title>Kuwau</Card.Title>
      </Card.Header>
      <Card.Content>
        <Card.Description>
          E-commerce for designers
        </Card.Description>
      </Card.Content>
    </Card>
    <Card as={NavLink} to='/projects/cloudcashier' className='card projects-card'>
      <Card.Header>
        <Card.Title>Cloud Cashier</Card.Title>
      </Card.Header>
      <Card.Content>
        <Card.Description>
          Helping retail accept bitcoin
        </Card.Description>
      </Card.Content>
    </Card>
  </div>

export default ProjectsList
