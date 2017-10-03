import React from 'react'
import { NavLink } from 'react-router-dom'

import Card from 'elements/Card'

const ProjectsList = () =>
  <div className='projects'>
    <Card as={NavLink} to='/projects/luvpay' className='card projects-card'>
      <Card.Header>
        <Card.Title>Luvpay - Collect Money with ease</Card.Title>
      </Card.Header>
      <Card.Content>
        <Card.Image src='/images/luvpay-preview.png' />
      </Card.Content>
    </Card>
    <Card as={NavLink} to='/projects/kuwau' className='card projects-card'>
      <Card.Header>
        <Card.Title>Kuwau - E-commerce for designers</Card.Title>
      </Card.Header>
      <Card.Content>
        <Card.Image src='/images/kuwau-preview.png' />
      </Card.Content>
    </Card>
    <Card as={NavLink} to='/projects/cloudcashier' className='card projects-card'>
      <Card.Header>
        <Card.Title>Cloud Cashier - Bitcoin for retail</Card.Title>
      </Card.Header>
      <Card.Content>
        <Card.Image src='/images/cloudcashier-preview.png' />
      </Card.Content>
    </Card>
  </div>

export default ProjectsList
