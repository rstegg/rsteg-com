import React from 'react'
import { NavLink } from 'react-router-dom'

import Hero from 'elements/Hero'
import Section from 'elements/Section'

const Home = () =>
  <div className='home-container'>
    <Hero>
      <Hero.Title>Ryan Stegmann</Hero.Title>
      <Hero.Subtitle>Mobile & Web App developer, Javascript Junkie, & Functional Fanatic</Hero.Subtitle>
    </Hero>
    <div className='home'>
      <div className='container'>
        <Section title='Hi.'>
          <br />
          <div className='content home-content'>
            <p>My name is Ryan.  I&rsquo;m a frontend developer, project manager and entrepreneur who helps startups create lovable apps.</p>
            <p>I&rsquo;m a passionate developer, coffee drinker and crazy dogs&rsquo; owner living in Riverside, California.</p>
            <div className='home-quicklinks'>
              <h2>Quick Links</h2>
              <div className='section home-quicklinks__group'>
                <NavLink to='/projects' className='button is-medium'>
                  My Projects
                </NavLink>
                <a href='https://github.com/rstegg' className='button is-medium'>
                  My Github
                </a>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  </div>

export default Home
