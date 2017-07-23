import React from 'react'
import { NavLink } from 'react-router-dom'

const Dock = () =>
  <div className='dock'>
    <a href='mailto:stegmannrd@gmail.com?subject=Hello' className='dock__item'>
      <span className='dock__item-text'>Mail</span>
      <i className='fal fa-paper-plane fa-2x'></i>
    </a>
    <NavLink to='/' className='dock__item'>
      <span className='dock__item-text'>Home</span>
      <i className='fal fa-home fa-2x'></i>
    </NavLink>
    <NavLink to='/blog' className='dock__item'>
      <span className='dock__item-text'>Blog</span>
      <i className='fal fa-list fa-2x'></i>
    </NavLink>
    <NavLink to='/about' className='dock__item'>
      <span className='dock__item-text'>About</span>
      <i className='fal fa-portrait fa-2x'></i>
    </NavLink>
  </div>

export default Dock
