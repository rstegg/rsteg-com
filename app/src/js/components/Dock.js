import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'

const Dock = ({ user, logout }) =>
  <div className='dock'>
    <NavLink to='/' className='dock__item'>
      <span className='dock__item-text'>Home</span>
      <i className='fal fa-home fa-2x'></i>
    </NavLink>
    <NavLink to='/blog' className='dock__item'>
      <span className='dock__item-text'>Blog</span>
      <i className='fal fa-list fa-2x'></i>
    </NavLink>
    <NavLink to='/projects' className='dock__item'>
      <span className='dock__item-text'>Projects</span>
      <i className='fal fa-book fa-2x'></i>
    </NavLink>
    <NavLink to='/about' className='dock__item'>
      <span className='dock__item-text'>About</span>
      <i className='fal fa-portrait fa-2x'></i>
    </NavLink>
    { user.isAuthenticated &&
      <div className='dock__item' onClick={() => logout()}>
        <i className='fal fa-power-off fa-2x'></i>
      </div>
    }
  </div>

const mapStateToProps = ({ user }) =>
({
  user
})

const mapDispatchToProps = dispatch =>
({
  logout: () => dispatch({ type: 'LOGOUT' })
})

const ConnectedDock =
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Dock)

export default withRouter(ConnectedDock)
