import React, { Component } from 'react'
import { connect } from 'react-redux'

import Loader from 'elements/Loader'
import Card from 'elements/Card'

import { fetchSinglePost } from 'actions/blog'

class Blog extends Component {
  componentWillMount() {
    const { match: { params } } = this.props
    this.props.fetchSinglePost(params.slug)
  }
  render() {
    const { post } = this.props
    if (!post || post.isLoading) {
      return <Loader />
    }
    return (
      <Card>
        <Card.Header>
          <Card.Title>{post.title}</Card.Title>
        </Card.Header>
        <Card.Content>
          <Card.Description>
            {post.text}
          </Card.Description>
        </Card.Content>
      </Card>
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
