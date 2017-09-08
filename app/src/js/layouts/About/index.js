import React from 'react'
import Hero from 'elements/Hero'

import AboutNav from './Nav'

const AboutLayout = ({ children }) =>
  <div className='about'>
    <Hero>
      <Hero.Title>Ryan Stegmann</Hero.Title>
      <Hero.Subtitle>About me</Hero.Subtitle>
    </Hero>
    <AboutNav />
    {children}
  </div>

export default AboutLayout
