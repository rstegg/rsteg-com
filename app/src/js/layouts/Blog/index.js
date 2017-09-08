import React from 'react'
import Hero from 'elements/Hero'

const BlogLayout = ({ children }) =>
  <div className='blog'>
    <Hero>
      <Hero.Title>Ryan Stegmann</Hero.Title>
      <Hero.Subtitle>My Blog</Hero.Subtitle>
    </Hero>
    {children}
  </div>

export default BlogLayout
