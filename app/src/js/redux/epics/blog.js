import { combineEpics } from 'redux-observable'
import {
  onFetchPostsSuccess,
  onFetchSinglePostSuccess,
  onCreatePostSuccess,
  onEditPostSuccess,
  onUploadPostImageSuccess,
  onUploadEditPostImageSuccess
} from 'actions/blog'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { get, httpPost, imagePost, put } from './helpers/req'

const api = {
  fetchPosts: () =>
    get('blog'),
  fetchSinglePost: ({ postId }) =>
    get(`blog/${postId}`),
  createPost: ({ post }) =>
    httpPost('blog', { post }),
  editPost: ({ post }) =>
    put(`blog/${post.id}`, { post }),
  uploadPostImage: ({ image }) =>
    imagePost('image/post', image),
  uploadEditPostImage: ({ image, postId }) =>
    imagePost(`image/post/${postId}`, image),
}

const fetchPosts = action$ =>
  action$.ofType('FETCH_POSTS')
    .mergeMap(() =>
      api.fetchPosts()
        .map(onFetchPostsSuccess)
        .catch(error => Observable.of({
          type: 'FETCH_POSTS_FAILURE',
          error
        }))
    )

const fetchSinglePost = action$ =>
  action$.ofType('FETCH_SINGLE_POST')
    .mergeMap(action =>
      api.fetchSinglePost(action.payload)
        .map(onFetchSinglePostSuccess)
        .catch(error => Observable.of({
          type: 'FETCH_SINGLE_POST_FAILURE',
          error
        }))
      )

const createPost = action$ =>
  action$.ofType('CREATE_POST')
    .mergeMap(action =>
      api.createPost(action.payload)
        .map(onCreatePostSuccess)
        .catch(error => Observable.of({
          type: 'CREATE_POST_FAILURE',
          error
        }))
      )

const editPost = action$ =>
  action$.ofType('EDIT_POST')
    .mergeMap(action =>
      api.editPost(action.payload)
        .map(onEditPostSuccess)
        .catch(error => Observable.of({
          type: 'EDIT_POST_FAILURE',
          error
        }))
      )

const uploadPostImage = action$ =>
  action$.ofType('UPLOAD_POST_IMAGE')
    .mergeMap(action =>
      api.uploadPostImage(action.payload)
        .map(onUploadPostImageSuccess)
        .catch(error => Observable.of({
          type: 'UPLOAD_POST_IMAGE_FAILURE',
          error
        }))
      )

const uploadEditPostImage = action$ =>
  action$.ofType('UPLOAD_EDIT_POST_IMAGE')
    .mergeMap(action =>
      api.uploadEditPostImage(action.payload)
        .map(onUploadEditPostImageSuccess)
        .catch(error => Observable.of({
          type: 'UPLOAD_EDIT_POST_IMAGE_FAILURE',
          error
        }))
      )

export default combineEpics(
  fetchPosts,
  fetchSinglePost,
  createPost,
  editPost,
  uploadPostImage,
  uploadEditPostImage
)
