import React, { Component } from 'react'
import Card from 'elements/Card'

class Home extends Component {
  componentWillMount() {
    window.twttr && window.twttr.widgets.load()
  }
  render() {
    return (
      <div className='home'>
        <Card as='a' href='https://www.kuwau.com'>
          <Card.Header>
            <Card.Title>Kuwau</Card.Title>
            <Card.Icon icon='usd' />
          </Card.Header>
          <Card.Content>
            <Card.Meta title='kuwau.com' />
            <Card.Description date='Last updated: 02:12 AM - 11 Jul 2017'>
              Personalize your e-commerce with in-depth product page design, real-time chat, and more!
            </Card.Description>
          </Card.Content>
        </Card>
        <Card as='a' href='https://www.luvpay.io'>
          <Card.Header>
            <Card.Title>Luvpay</Card.Title>
            <Card.Icon icon='heart' />
          </Card.Header>
          <Card.Content>
            <Card.Meta title='luvpay.io' />
            <Card.Description date='Last updated: 04:18 PM - 18 Jun 2017'>
              Create forms to collect money
            </Card.Description>
          </Card.Content>
        </Card>
        <Card as='a' href='https://github.com/rstegg'>
          <Card.Header>
            <Card.Title>My Github</Card.Title>
            <Card.Icon icon='github' />
          </Card.Header>
          <Card.Content>
            <Card.Meta title='github.com/rstegg' />
            <Card.Description date='Last updated: 11:52 AM - 23 Jul 2017'>
              Check out some code I wrote!
            </Card.Description>
          </Card.Content>
        </Card>
        <Card as='a' href='https://linkedin.com/in/ryan-stegmann-947365117'>
          <Card.Header>
            <Card.Title>My LinkedIn</Card.Title>
            <Card.Icon icon='linkedin' />
          </Card.Header>
          <Card.Content>
            <Card.Meta title='www.linkedin.com/in/rstegd' />
            <Card.Description date='Last updated: lord knows'>
              Use Linkedin. Someday.
            </Card.Description>
          </Card.Content>
        </Card>
        <Card as='a' href='https://www.twitter.com/rstegd'>
          <Card.Header>
            <Card.Title>My Twitter</Card.Title>
            <Card.Icon icon='twitter' />
          </Card.Header>
          <Card.Content>
            <Card.Description>
              <a className='twitter-timeline' data-height='280' href='https://twitter.com/rstegd'>
                Tweets by rstegd
              </a><script async src='//platform.twitter.com/widgets.js' charSet='utf-8'></script>
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

export default Home
