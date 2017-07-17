import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'

const Button = ({ positive, onClick, children }) =>
  <button onClick={onClick} className={positive ? 'button positive' : 'button'}>{children}</button>

const Header = ({ user, logout }) =>
  <header className='header'>
    <div className='header__logo'>
      <NavLink to='/'>
        <img src='/images/logo/rsteg-logo-100.png' className='header__logo-image' />
      </NavLink>
    </div>
      {user.isAuthenticated ?
        <div className='header__nav'>
          <div className='header__navitem'>
            <NavLink to='/'>
              <Button>home</Button>
            </NavLink>
          </div>
          <div className='header__navitem'>
            <NavLink to='/shops'>
              <Button>your shops</Button>
            </NavLink>
          </div>
          <div className='header__navitem'>
            <NavLink to='/shops/new'>
              <Button>start a shop</Button>
            </NavLink>
          </div>
          <div className='header__navitem'>
            <Button onClick={() => logout()}>Logout</Button>
          </div>
        </div>
        :
        <div className='header__nav'>
          <div className='header__navmenu'>
            <NavLink to='/login'>
              <Button>Login</Button>
            </NavLink>
            <NavLink to='/signup'>
              <Button positive>Sign up</Button>
            </NavLink>
          </div>
        </div>
      }
  </header>

const mapStateToProps = ({ user }) =>
({
  user
})

const mapDispatchToProps = dispatch =>
({
  logout: () => dispatch({ type: 'LOGOUT' })
})

const ConnectedHeader =
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)

export default withRouter(ConnectedHeader)
