import React from 'react'
import Card from 'elements/Card'

const HomeCard = ({ href, color, header, icon, title, description, isTwitterFeed }) =>
  <Card as={isTwitterFeed ? 'div' : 'a'} href={href} style={{ backgroundColor: color }} className='card home-card'>
    <Card.Header>
      <Card.Title>{header}</Card.Title>
      <Card.Icon icon={icon} />
    </Card.Header>
    <Card.Content>
      <Card.Meta title={title} />
      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content>
  </Card>

export default HomeCard
