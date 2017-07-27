import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { length } from 'ramda'
import moment from 'moment'

import Loader from 'elements/Loader'

import { fetchPosts } from 'actions/blog'

const PostRow = ({ title, image, date, text }) =>
  <div className='box'>
    <article className='media'>
      <div className='media-left'>
        <figure className='image is-64x64'>
          <img src={image} alt={title} />
        </figure>
      </div>
      <div className='media-content'>
        <div className='content'>
          <p>
            <strong>{title}</strong> <small>{date}</small>
            <br />
            {text}
          </p>
        </div>
      </div>
    </article>
  </div>

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
          <li key={post.slug}>
            <NavLink to={`/blog/${post.slug}`}>
              <PostRow
                title={post.title}
                image={post.image}
                date={moment(post.createdAt).fromNow()}
                text={post.text}
              />
            </NavLink>
          </li>
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
