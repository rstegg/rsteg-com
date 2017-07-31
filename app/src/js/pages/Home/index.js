import React, { Component } from 'react'
import HomeCard from './HomeCard'
import TwitterFeed from './TwitterFeed'

const colors = {
  orange:   '#FF6A00',
  lightOrange: '#FFA361',
  yellow:   '#FFC761',
  blue:     '#81A7E5',
  teal:     '#C1E5E0',
  pink:     '#FF9C92',
}

class Home extends Component {
  componentDidMount() {
    window.twttr && window.twttr.widgets.load()
  }
  render() {
    return (
      <div className='home'>
        <HomeCard header='Kuwau - Personal Project'
          href='https://www.kuwau.com'
          color={colors.yellow}
          icon='shopping-cart'
          title='kuwau.com'
          description='E-commerce with designers in mind'
        />
        <HomeCard header='Luvpay - Personal Project'
          href='https://www.luvpay.io'
          color={colors.lightOrange}
          icon='heart'
          title='luvpay.io'
          description='Create forms and collect money'
        />
        <HomeCard header='My Github'
          href='https://github.com/rstegg'
          color={colors.pink}
          icon='github'
          title='github.com/rstegg'
          description='Check out some code I wrote!'
        />
        <HomeCard header='My LinkedIn'
          href='https://linkedin.com/in/rsteg'
          color={colors.teal}
          icon='linkedin'
          title='linkedin.com/in/rstegd'
          description='Connect with me on Linkedin!'
        />
        <HomeCard header='My Twitter'
          href='https://www.twitter.com/rstegd'
          color={colors.blue}
          icon='twitter'
          description={<TwitterFeed />}
          isTwitterFeed
        />
      </div>
    )
  }
}

export default Home
