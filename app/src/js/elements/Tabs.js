import React from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'

export const Tabs = ({ children }) =>
  <div className='tabs is-toggle is-fullwidth is-large'>
    <ul>
      {children}
    </ul>
  </div>

export const Tab = withRouter(
  ({ location: { pathname }, path, children }) =>
    <li className={pathname === path ? 'is-active' : null}>
      <NavLink to={path}>
        {children}
      </NavLink>
    </li>
)

Tab.Icon = ({ icon }) =>
  <span className='icon tab-icon'>
    <i className={`fal fa-${icon}`}></i>
  </span>

Tab.Icon.displayName = 'Tab.Icon'

Tab.Title = ({ children }) =>
  <span className='tab-text'>
    {children}
  </span>

Tab.Title.displayName = 'Tab.Title'
