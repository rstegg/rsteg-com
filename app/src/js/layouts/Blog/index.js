import React from 'react'
import Hero from 'elements/Hero'

import { NavLink } from 'react-router-dom'
import { generateIcon } from 'utils/helpers'

const BlogLayout = ({ children, location }) =>
  <div className='blog'>
    <Hero>
      <Hero.Title>Ryan Stegmann</Hero.Title>
      <Hero.Subtitle>My Blog</Hero.Subtitle>
      { location.pathname !== '/blog' && <NavLink to='/blog' className='blog-back'><i className={generateIcon('angle-left')}></i> Blog posts</NavLink> }
    </Hero>
    {children}
  </div>

export default BlogLayout
