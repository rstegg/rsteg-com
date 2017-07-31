import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactMarkdown from 'react-markdown'

import Loader from 'elements/Loader'
import Section from 'elements/Section'

import { fetchSinglePost } from 'actions/blog'

class Blog extends Component {
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
      <div className='container blog-post-container'>
        <Section>
          {post.title}
        </Section>
        <div className='content blog-post'>
          <ReactMarkdown source={post.text} />
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
)(Blog)
