import React, { Component } from 'react'
import { connect } from 'react-redux'

import { onScrolling, onScrollingEnd, updateScroll } from 'actions/ui'

import Header from 'components/Header'
import Dock from 'components/Dock'

class RootLayout extends Component {
  componentDidMount() {
    document.addEventListener('scroll', () => this.scrollHandle())
  }
  componentWillUnmount() {
    document.removeEventListener('scroll', () => this.scrollHandle())
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
    const { children, ui } = this.props
    return (
      <div className='root'>
        <Header />
        {children}
        <Dock isScrolling={ui.isScrolling} />
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
)(RootLayout)
