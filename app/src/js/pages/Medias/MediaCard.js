import React from 'react'
import Card from 'elements/Card'

const MediaCard = ({ href, title, image }) =>
  <Card as='a' href={href} className='card medias-card'>
    <Card.Header>
      <Card.Title>{title}</Card.Title>
    </Card.Header>
    <Card.Image src={image} />
  </Card>

export default MediaCard
