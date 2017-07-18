import React from 'react'
import Card from './Card'

const Home = () =>
  <div className='home'>
    <Card>
      <Card.Header>
        <Card.Title>Card 1</Card.Title>
        <Card.Icon icon='home' />
      </Card.Header>
      <Card.Content>
        <Card.Meta title='Card 1!' />
        <Card.Description date='11:09 PM - 1 Jan 2016'>
          This is a card.
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Card.Header>
        <Card.Title>Card 1</Card.Title>
        <Card.Icon icon='home' />
      </Card.Header>
      <Card.Content>
        <Card.Meta title='Card 1!' />
        <Card.Description date='11:09 PM - 1 Jan 2016'>
          This is a card.
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Card.Header>
        <Card.Title>Card 1</Card.Title>
        <Card.Icon icon='home' />
      </Card.Header>
      <Card.Content>
        <Card.Meta title='Card 1!' />
        <Card.Description date='11:09 PM - 1 Jan 2016'>
          This is a card.
        </Card.Description>
      </Card.Content>
    </Card>
  </div>

export default Home
