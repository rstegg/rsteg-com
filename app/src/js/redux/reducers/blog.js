const initialState = {
  list: [],
  active: {},
  new: {},
  isLoading: false,
  error: null
}

export default function(state = initialState, action) {
  switch (action.type) {
  case 'FETCH_POSTS':
    return Object.assign({}, state, {
      list: [],
      error: null,
      isLoading: true
    })
  case 'FETCH_POSTS_SUCCESS':
    return Object.assign({}, state, {
      list: action.payload.list,
      error: null,
      isLoading: false
    })
  case 'FETCH_POSTS_FAILURE':
    return Object.assign({}, state, {
      list: [],
      error: 'Something went wrong. Please contact me if error persists!',
      isLoading: false
    })
  case 'OPEN_CREATE_POST_CROPPER':
    return Object.assign({}, state, {
      new: {
        ...state.new,
        isCropperOpen: true,
        imagePreview: action.payload.image
      }
    })
  case 'CLOSE_CREATE_POST_CROPPER':
    return Object.assign({}, state, {
      new: {
        ...state.new,
        isCropperOpen: false,
        imagePreview: null
      }
    })
  case 'LOGOUT':
    return initialState
  default:
    return state
  }
}
