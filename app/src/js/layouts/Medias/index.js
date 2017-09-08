import React from 'react'
import Hero from 'elements/Hero'

const MediasLayout = ({ children }) =>
  <div className='medias'>
    <Hero>
      <Hero.Title>Ryan Stegmann</Hero.Title>
      <Hero.Subtitle>Social Medias</Hero.Subtitle>
    </Hero>
    {children}
  </div>

export default MediasLayout
