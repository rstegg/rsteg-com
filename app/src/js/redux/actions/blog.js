export const refreshPosts = () =>
({
  type: 'REFRESH_POSTS'
})

export const openCreatePostCropper = image =>
({
  type: 'OPEN_CREATE_POST_CROPPER',
  payload: {
    image
  }
})

export const closeCreatePostCropper = () =>
({
  type: 'CLOSE_CREATE_POST_CROPPER'
})

export const openEditPostCropper = image =>
({
  type: 'OPEN_EDIT_POST_CROPPER',
  payload: {
    image
  }
})

export const closeEditPostCropper = () =>
({
  type: 'CLOSE_EDIT_POST_CROPPER'
})

export const switchToPostAdmin = () =>
({
  type: 'SWITCH_TO_POST_ADMIN'
})

export const switchToPostUser = () =>
({
  type: 'SWITCH_TO_POST_USER'
})

export const fetchPosts = () =>
({
  type: 'FETCH_POSTS'
})

export const onFetchPostsSuccess = res =>
({
  type: 'FETCH_POSTS_SUCCESS',
  payload: {
    posts: res.body.posts
  }
})

export const fetchSinglePost = slug =>
({
  type: 'FETCH_SINGLE_POST',
  payload: {
    postId: slug
  }
})

export const onFetchSinglePostSuccess = res =>
({
  type: 'FETCH_SINGLE_POST_SUCCESS',
  payload: {
    post: res.body.post
  }
})

export const createPost = (post, user) =>
({
  type: 'CREATE_POST',
  payload: {
    post,
    user
  }
})

export const onCreatePostSuccess = res =>
({
  type: 'CREATE_POST_SUCCESS',
  payload: {
    post: res.body.post
  }
})

export const editPostField = field =>
({
  type: 'EDIT_POST_FIELD',
  payload: {
    field
  }
})

export const editPost = (POST, user) =>
({
  type: 'EDIT_POST',
  payload: {
    POST,
    user
  }
})

export const onEditPostSuccess = res =>
({
  type: 'EDIT_POST_SUCCESS',
  payload: {
    post: res.body.post
  }
})

export const deletePost = (postId, user) =>
({
  type: 'DELETE_POST',
  payload: {
    postId,
    user
  }
})

export const onDeletePostSuccess = res =>
({
  type: 'DELETE_POST_SUCCESS',
  payload: {
    post: res.body.post
  }
})

export const uploadPostImage = (image, user) =>
({
  type: 'UPLOAD_POST_IMAGE',
  payload: {
    image,
    token: user.token
  }
})

export const onUploadPostImageSuccess = res =>
({
  type: 'UPLOAD_POST_IMAGE_SUCCESS',
  payload: {
    image: res.body.image
  }
})

export const uploadEditPostImage = (image, POST, user) =>
({
  type: 'UPLOAD_EDIT_POST_IMAGE',
  payload: {
    image,
    token: user.token,
    postId: POST.id
  }
})

export const onUploadEditPostImageSuccess = res =>
({
  type: 'UPLOAD_EDIT_POST_IMAGE_SUCCESS',
  payload: {
    image: res.body.image
  }
})

export const onUploadPostImageFailure = () =>
({
  type: 'UPLOAD_POST_IMAGE_FAILURE'
})

export const onUploadEditPostImageFailure = () =>
({
  type: 'UPLOAD_EDIT_POST_IMAGE_FAILURE'
})
