import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { length } from 'ramda'

import Loader from 'elements/Loader'

import { fetchPosts } from 'actions/blog'

class Blog extends Component {
  componentWillMount() {
    this.props.fetchPosts()
  }
  render() {
    const { blog } = this.props
    const posts = blog.list
    if (!length(posts)) {
      return <div>
        <Loader />
        <NavLink to='/blog/new'>
          New Post
        </NavLink>
      </div>
    }
    return (
      <ul>
        {posts.map(post =>
          <li key={post.slug}>
            {post.title}
          </li>
        )}
        <NavLink to='/blog/new'>
          New Post
        </NavLink>
      </ul>
    )
  }
}

const mapStateToProps = ({ blog }) =>
({
  blog
})

const mapDispatchToProps = dispatch =>
({
  fetchPosts: () => dispatch(fetchPosts())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog)
