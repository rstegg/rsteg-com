import React, { Component } from 'react'
import { connect } from 'react-redux'
import { length } from 'ramda'
import moment from 'moment'

import Loader from 'elements/Loader'
import PostRow from './row'

import { fetchPosts } from 'actions/blog'

class Blog extends Component {
  componentWillMount() {
    this.props.fetchPosts()
  }
  render() {
    const { blog } = this.props
    const posts = blog.list
    if (!length(posts)) {
      return <div className='loading-container'><Loader /></div>
    }
    return (
      <ul>
        {posts.map(post =>
          <PostRow
            to={`/blog/${post.slug}`}
            title={post.title}
            image={post.image}
            date={moment(post.createdAt).fromNow()}
            text={post.text}
            key={post.slug}
          />
        )}
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
