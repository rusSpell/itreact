import { usersAPI, profileAPI } from '../api/api'

const ADD_POST = 'ADD_POST'
const DELETE_POST = 'DELETE_POST'
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SAVE_PHOTO_SUCCSESS = 'SAVE_PHOTO_SUCCSESS'
const PHOTO_IS_FETCHING = 'PHOTO_IS_FETCHING'

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let initialState = {
  posts: [
    { id: 1, message: 'Привет, как твои дела?', likeCount: getRandomInt(100), dislikeCount: getRandomInt(10) },
    { id: 2, message: 'Когда начнем писать на реакте?', likeCount: getRandomInt(100), dislikeCount: getRandomInt(10) },
    { id: 3, message: 'Реакт, это интересно', likeCount: getRandomInt(40), dislikeCount: getRandomInt(10) },
    { id: 4, message: 'Дальше действвать будем мы!', likeCount: getRandomInt(50), dislikeCount: getRandomInt(10) },
    { id: 5, message: 'Привет, как твои дела?', likeCount: getRandomInt(50), dislikeCount: getRandomInt(10) },
  ],
  profile: null,
  status: '',
  isFetching: false
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 6,
        message: action.newPostText,
        likeCount: 0,
        dislikeCount: 0
      }
      let stateCopy = {
        ...state,
        posts: [...state.posts, newPost],
      }
      return stateCopy
    }
    case DELETE_POST: {
      let stateCopy = {
        ...state,
        posts: state.posts.filter(p => p.id != action.postId),
      }
      return stateCopy
    }
    case SET_USERS_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }
    case SAVE_PHOTO_SUCCSESS: {
      return { ...state, profile: {...state.profile, photos: action.photos} }
    }
    case PHOTO_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching }
    }
    default:
      return state
  }
}
/* ACTION_CREATORS */
export const addPostActionCreator = (newPostText) =>
  ({ type: ADD_POST, newPostText })

export const deletePost = (postId) =>
  ({ type: DELETE_POST, postId })

export const setUserProfile = (profile) =>
  ({ type: SET_USERS_PROFILE, profile })

export const setStatus = (status) =>
  ({ type: SET_STATUS, status })

export const savePhotoSuccsess = (photos) =>
  ({ type: SAVE_PHOTO_SUCCSESS, photos })
  
export const toggleIsFetching = (isFetching) =>
  ({ type: PHOTO_IS_FETCHING, isFetching })

/* THUNKS */
export const getUserProfile = (userId) => async (dispatch) => {
  dispatch(toggleIsFetching(true))
  let response = await usersAPI.getUserProfile(userId)
  dispatch(setUserProfile(response.data))
  dispatch(toggleIsFetching(false))
}
export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId)
  dispatch(setStatus(response.data))
}
export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status)
  if (!response.data.resultCode) {
    dispatch(setStatus(status))
  }
}
export const savePhoto = (file) => async (dispatch) => {
  dispatch(toggleIsFetching(true))
  let response = await profileAPI.savePhoto(file)
  if (!response.data.resultCode) {
    dispatch(savePhotoSuccsess(response.data.data.photos))    
    dispatch(toggleIsFetching(false))
  }
  
}

export default profileReducer