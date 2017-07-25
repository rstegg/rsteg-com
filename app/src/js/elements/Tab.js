import React from 'react'
import { NavLink } from 'react-router-dom'

const Tab = ({ isActive, icon, title, to }) =>
  <li className={isActive ? 'is-active' : null}>
    <NavLink to={to}>
      <span className='icon'><i className={`fal fa-${icon}`}></i></span>
      <span>{title}</span>
    </NavLink>
  </li>

export default Tab
