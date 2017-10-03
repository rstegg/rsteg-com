import React, { Component } from 'react'
import { connect } from 'react-redux'
import { length } from 'ramda'
import moment from 'moment'

import Loader from 'elements/Loader'
import Hero from 'elements/Hero'
import PostRow from './row'

import { fetchPosts } from 'actions/blog'

const BlogIntro = () =>
  <Hero.Blog>
    <Hero.Title>No Posts found!</Hero.Title>
    <Hero.Subtitle>I probably haven&rsquo;t written any posts yet &#128559;</Hero.Subtitle>
  </Hero.Blog>

class Blog extends Component {
  componentWillMount() {
    this.props.fetchPosts()
  }
  render() {
    const { blog } = this.props
    const posts = blog.list
    if (blog.isLoading) {
      return <div className='loading-container'><Loader /></div>
    }
    if (!length(posts)) {
      return <BlogIntro />
    }
    return (
      <ul className='content blog-list'>
        {posts.map(post =>
          <PostRow
            to={`/blog/${post.slug}`}
            title={post.title}
            image={post.image}
            date={moment(post.createdAt).fromNow()}
            preview={post.preview}
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
