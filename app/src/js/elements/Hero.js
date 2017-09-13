import React from 'react'

const Hero = ({ children }) =>
  <section className='hero is-primary'>
    <div className='hero-body'>
      <div className='container'>
        {children}
      </div>
    </div>
  </section>

Hero.Blog = ({ children }) =>
  <section className='hero is-info is-small'>
    <div className='hero-body'>
      <div className='container'>
        {children}
      </div>
    </div>
  </section>

Hero.Blog.displayName = 'Hero.Blog'

Hero.Title = ({ children }) =>
  <h1 className='title'>
    {children}
  </h1>

Hero.Title.displayName = 'Hero.Title'

Hero.Subtitle = ({ children }) =>
  <h2 className='subtitle'>
    {children}
  </h2>

Hero.Subtitle.displayName = 'Hero.Subtitle'

export default Hero
