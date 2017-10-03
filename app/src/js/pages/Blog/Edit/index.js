import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import EditPostForm from './form'

import Loader from 'elements/Loader'
import Image from 'elements/Image'

import { fetchSinglePost, editPost, openPostImageCropper, closePostImageCropper, uploadPostImage, onUploadPostImageFailure } from 'actions/blog'

import Dropzone from 'components/Dropzone'
import ImageCropper from 'components/ImageCropper'

const keywordsArray = keywords => keywords.split(',')

const Avatar = ({ post, openCropper, onUploadPostImageFailure }) =>
  <Dropzone className='image editable avatar-image' onDropAccepted={openCropper} onDropRejected={onUploadPostImageFailure}>
    {post.imageLoading && <Loader />}
    <Image src={post.image || '/images/placeholder.png'} />
    {post.imageError && <p className='help is-danger'>Invalid image</p>}
  </Dropzone>

class EditPost extends Component {
  componentWillMount() {
    const { match: { params } } = this.props
    this.props.fetchSinglePost(params.slug)
  }
  render() {
    const { user, post, editPost, openPostImageCropper, closePostImageCropper, uploadPostImage, onUploadPostImageFailure } = this.props
    if (post.isLoading) {
      return <div className='loading-container'><Loader /></div>
    }
    if (post.isEdited) {
      return <Redirect to={`/blog/${post.slug}`} />
    }
    return (
      <div className='blog-form'>
        {post.isCropperOpen ?
          <ImageCropper isOpen={post.isCropperOpen} image={post.imagePreview} uploadImage={img => uploadPostImage(img, user)} closeCropper={closePostImageCropper} />
          :
          <Avatar post={post} openCropper={img => openPostImageCropper(img[0])} onUploadPostImageFailure={onUploadPostImageFailure} />
        }
        <EditPostForm onSubmit={values => editPost(({ ...values, keywords: keywordsArray(values.keywords), image: post.image }), user)} />
      </div>
    )
  }
}

const mapStateToProps = ({ user, blog }) =>
({
  user,
  post: blog.active
})

const mapDispatchToProps = dispatch =>
({
  editPost: (post, user) => dispatch(editPost(post, user)),
  fetchSinglePost: slug => dispatch(fetchSinglePost(slug)),
  uploadPostImage: (img, user) => dispatch(uploadPostImage(img, user)),
  onUploadPostImageFailure: () => dispatch(onUploadPostImageFailure()),
  openPostImageCropper: img => dispatch(openPostImageCropper(img)),
  closePostImageCropper: () => dispatch(closePostImageCropper()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditPost)
