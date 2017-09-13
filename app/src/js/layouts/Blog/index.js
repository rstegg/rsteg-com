import React from 'react'
import Hero from 'elements/Hero'

import { NavLink } from 'react-router-dom'

const BlogLayout = ({ children, location }) =>
  <div className='blog-container'>
    <Hero>
      <Hero.Title>Ryan Stegmann</Hero.Title>
      <Hero.Subtitle>My Blog</Hero.Subtitle>
      { location.pathname !== '/blog' && <NavLink to='/blog'>Back to list</NavLink> }
    </Hero>
    {children}
  </div>

export default BlogLayout
