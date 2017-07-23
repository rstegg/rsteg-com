import React, { Component } from 'react'
import HomeCard from './HomeCard'
import TwitterFeed from './TwitterFeed'

class Home extends Component {
  componentWillMount() {
    window.twttr && window.twttr.widgets.load()
  }
  render() {
    return (
      <div className='home'>
        <HomeCard header='Kuwau - Personal Project'
          href='https://www.kuwau.com'
          color='#D97081'
          icon='shopping-cart'
          title='kuwau.com'
          date='Last updated: 02:12 AM - 11 Jul 2017'
          description='E-commerce for designers, with real-time chat and more!'
        />
        <HomeCard header='Luvpay - Personal Project'
          href='https://www.luvpay.io'
          color='#70cf95'
          icon='heart'
          title='luvpay.io'
          date='Last updated: 04:18 PM - 18 Jun 2017'
          description='Create forms and collect money'
        />
        <HomeCard header='My Github'
          href='https://github.com/rstegg'
          color='#999'
          icon='github'
          title='github.com/rstegg'
          date='Last updated: 11:52 AM - 23 Jul 2017'
          description='Check out some code I wrote!'
        />
        <HomeCard header='My LinkedIn'
          href='https://linkedin.com/in/rsteg'
          color='#007bb6'
          icon='linkedin'
          title='linkedin.com/in/rstegd'
          date='Last updated: lord knows'
          description='Connect with me on Linkedin!'
        />
        <HomeCard header='My Twitter'
          href='https://www.twitter.com/rstegd'
          color='#00aced'
          icon='twitter'
          description={<TwitterFeed />}
        />
      </div>
    )
  }
}

export default Home
