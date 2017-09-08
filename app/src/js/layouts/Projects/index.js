import React from 'react'
import Hero from 'elements/Hero'

const ProjectsLayout = ({ children }) =>
  <div className='projects-container'>
    <Hero>
      <Hero.Title>Ryan Stegmann</Hero.Title>
      <Hero.Subtitle>Projects</Hero.Subtitle>
    </Hero>
    {children}
  </div>

export default ProjectsLayout
