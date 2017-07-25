import React from 'react'
import { NavLink } from 'react-router-dom'

import { generate2xIcon } from 'utils/helpers'

const Dock = () =>
  <div className='dock'>
    <a href='mailto:stegmannrd@gmail.com?subject=Hello' className='dock__item'>
      <span className='dock__item-text'>Mail</span>
      <i className={generate2xIcon('paper-plane')}></i>
    </a>
    <NavLink to='/' className='dock__item'>
      <span className='dock__item-text'>Home</span>
      <i className={generate2xIcon('home')}></i>
    </NavLink>
    <NavLink to='/blog' className='dock__item'>
      <span className='dock__item-text'>Blog</span>
      <i className={generate2xIcon('list')}></i>
    </NavLink>
    <NavLink to='/about/languages' className='dock__item'>
      <span className='dock__item-text'>About</span>
      <i className={generate2xIcon('portrait')}></i>
    </NavLink>
  </div>

export default Dock
