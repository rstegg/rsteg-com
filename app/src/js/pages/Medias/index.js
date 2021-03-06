import React, { Component } from 'react'
import TwitterFeed from './TwitterFeed'
import Hero from 'elements/Hero'
import MediaCard from './MediaCard'

const TwitterCard = () =>
  <div className='card medias-twitter'>
    <div className='card-header-title'>
      my twitter
    </div>
    <div className='card-image'>
      <figure className='image is-square'>
        <TwitterFeed />
      </figure>
    </div>
  </div>

class Home extends Component {
  componentDidMount() {
    window.twttr && window.twttr.widgets.load()
  }
  render() {
    return (
      <div className='medias-container'>
        <Hero>
          <Hero.Title>Ryan Stegmann</Hero.Title>
          <Hero.Subtitle>Social Medias</Hero.Subtitle>
        </Hero>
        <div className='medias'>
          <MediaCard
            href='https://www.github.com/rstegg'
            title='my github'
            image='/images/github-preview.png'
          />
          <MediaCard
            href='https://www.linkedin.com/in/rsteg'
            title='my linkedin'
            image='/images/linkedin-preview.png'
          />
          <TwitterCard />
        </div>
      </div>
    )
  }
}

export default Home
