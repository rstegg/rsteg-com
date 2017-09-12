import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { onScrolling, onScrollingEnd, updateScroll } from 'actions/ui'
import { generate2xIcon } from 'utils/helpers'

const DockItem = ({ to, icon, text }) =>
  <NavLink to={to} className='dock__item'>
    <span className='dock__item-text'>{text}</span>
    <i className={generate2xIcon(icon)}></i>
  </NavLink>

class Dock extends Component {
  componentDidMount() {
    window.addEventListener('scroll', () => this.scrollHandle())
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.scrollHandle())
  }
  scrollHandle() {
    const { onScrolling, onScrollingEnd, updateScroll, ui } = this.props
    updateScroll(window.scrollY)
    if (window.scrollY > ui.scrollY) {
      onScrolling()
      if (this.scrollingTimeout) {
        clearTimeout(this.scrollingTimeout)
      }
      this.scrollingTimeout = setTimeout(onScrollingEnd, 450)
    }
  }
  render() {
    const { ui: { isScrolling } } = this.props
    return (
      <div className={`dock ${isScrolling ? 'dock--hide' : ''}`}>
        <DockItem to='mailto:stegmannrd@gmail.com?subject=Hello' icon='paper-plane' text='Mail' />
        <DockItem to='/' icon='home' text='Home' />
        <DockItem to='/projects' icon='folder-open' text='Works' />
        <DockItem to='/medias' icon='globe' text='Social' />
        <DockItem to='/blog' icon='list' text='Blog' />
        <DockItem to='/about/languages' icon='portrait' text='About' />
      </div>
    )
  }
}

const mapStateToProps = ({ ui }) =>
({
  ui
})

const mapDispatchToProps = dispatch =>
({
  updateScroll: scrollY => dispatch(updateScroll(scrollY)),
  onScrolling: () => dispatch(onScrolling()),
  onScrollingEnd: () => dispatch(onScrollingEnd())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dock)
