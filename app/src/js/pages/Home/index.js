import React, { Component } from 'react'
import HomeCard from './HomeCard'
import TwitterFeed from './TwitterFeed'
import Hero from 'elements/Hero'

class Home extends Component {
  componentDidMount() {
    window.twttr && window.twttr.widgets.load()
  }
  render() {
    return (
      <div className='home-container'>
        <Hero title='Ryan Stegmann' subtitle='Projects and media' />
        <div className='home'>
          <HomeCard
            href='https://www.kuwau.com'
            title='kuwau - side project'
            image='/images/kuwau-preview.png'
          />
          <HomeCard
            href='https://www.luvpay.io'
            title='luvpay.io - side project'
            image='/images/luvpay-preview.png'
          />
          <HomeCard
            href='https://www.github.com/rstegg'
            title='my github'
            image='/images/github-preview.png'
          />
          <HomeCard
            href='https://www.linkedin.com/in/rsteg'
            title='my linkedin'
            image='/images/linkedin-preview.png'
          />
          <div className='card home-card-twitter'>
            <div className='card-header-title'>
              my twitter
            </div>
            <div className='card-image'>
              <figure className='image is-square'>
                <TwitterFeed />
              </figure>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Home
