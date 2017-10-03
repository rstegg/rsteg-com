import React, { Component } from 'react'
import { connect } from 'react-redux'
import Markdown from 'react-markdown'

import Loader from 'elements/Loader'
import Hero from 'elements/Hero'

import { fetchSinglePost } from 'actions/blog'

class Post extends Component {
  componentWillMount() {
    const { match: { params } } = this.props
    this.props.fetchSinglePost(params.slug)
  }
  render() {
    const { post } = this.props
    if (!post.text || post.isLoading) {
      return <div className='loading-container'><Loader /></div>
    }
    return (
      <div className='blog-post-container'>
        <Hero.Blog>
          <Hero.Title>{post.title}</Hero.Title>
          <Hero.Subtitle>{post.preview}</Hero.Subtitle>
        </Hero.Blog>
        <div className='container'>
          <div className='content blog-post'>
            <Markdown source={post.text} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ blog }) =>
({
  post: blog.active
})

const mapDispatchToProps = dispatch =>
({
  fetchSinglePost: slug => dispatch(fetchSinglePost(slug))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
