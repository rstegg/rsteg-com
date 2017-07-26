import React from 'react'
import { connect } from 'react-redux'
import { Redirect, NavLink } from 'react-router-dom'

import CreatePostForm from './form'

import Loader from 'elements/Loader'
import Button from 'elements/Button'
import Image from 'elements/Image'

import { createPost, openCreatePostCropper, closeCreatePostCropper, uploadPostImage, onUploadPostImageFailure } from 'actions/blog'

import Dropzone from 'components/Dropzone'
import ImageCropper from 'components/ImageCropper'

const keywordsArray = keywords => keywords.split(',')

const Avatar = ({ post, openCropper, onUploadPostImageFailure }) =>
  <Dropzone className='image editable avatar-image' onDropAccepted={openCropper} onDropRejected={onUploadPostImageFailure}>
    {post.imageLoading && <Loader />}
    <Image src={post.image || '/images/placeholder.png'} />
    {post.imageError && <p className='help is-danger'>Invalid image</p>}
  </Dropzone>

const CreatePost = ({
  user,
  post,
  createPost,
  openCreatePostCropper,
  closeCreatePostCropper,
  uploadPostImage,
  onUploadPostImageFailure
}) =>
  post.isCreated ?
     <Redirect to={`/blog/${post.slug}`} />
  :
    <div className='blog-form'>
      {post.isCropperOpen ?
        <ImageCropper isOpen={post.isCropperOpen} image={post.imagePreview} uploadImage={img => uploadPostImage(img, user)} closeCropper={closeCreatePostCropper} />
        :
        <Avatar post={post} openCropper={img => openCreatePostCropper(img[0])} onUploadPostImageFailure={onUploadPostImageFailure} />
      }
      <CreatePostForm onSubmit={values => createPost(({ ...values, keywords: keywordsArray(values.keywords), image: post.image }), user)} />
      <Button color='danger' as={NavLink} to={'/blog'}>Cancel</Button>
    </div>

const mapStateToProps = ({ user, blog }) =>
({
  user,
  post: blog.new
})

const mapDispatchToProps = dispatch =>
({
  createPost: (post, user) => dispatch(createPost(post, user)),
  uploadPostImage: (img, user) => dispatch(uploadPostImage(img, user)),
  onUploadPostImageFailure: () => dispatch(onUploadPostImageFailure()),
  openCreatePostCropper: img => dispatch(openCreatePostCropper(img)),
  closeCreatePostCropper: () => dispatch(closeCreatePostCropper()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreatePost)
