import React from 'react'
import Card from 'elements/Card'

const HomeCard = ({ href, color, header, icon, title, date, description }) =>
  <Card as='a' href={href} style={{ backgroundColor: color }}>
    <Card.Header>
      <Card.Title>{header}</Card.Title>
      <Card.Icon icon={icon} />
    </Card.Header>
    <Card.Content>
      <Card.Meta title={title} />
      <Card.Description date={date}>
        {description}
      </Card.Description>
    </Card.Content>
  </Card>

export default HomeCard
