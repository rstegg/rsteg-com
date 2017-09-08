import React from 'react'
import Hero from 'elements/Hero'
import Section from 'elements/Section'

const Home = () =>
  <div className='home-container'>
    <Hero>
      <Hero.Title>Ryan Stegmann</Hero.Title>
      <Hero.Subtitle>Test-driven, UX-focused product manager and entrepreneur.</Hero.Subtitle>
    </Hero>
    <div className='home'>
      <div className='container'>
        <Section title='Hi.'>
          <br />
          <div className='content'>
            <p>My name is Ryan.  I&rsquo;m a frontend developer, product manager and entrepreneur who helps startups create lovable apps.</p>
            <p>I&rsquo;m a passionate developer, coffee drinker and crazy dogs&rsquo; owner living in Riverside, California.</p>
          </div>
        </Section>
      </div>
    </div>
  </div>

export default Home
