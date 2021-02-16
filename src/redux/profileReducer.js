import { usersAPI, profileAPI } from '../api/api'

const ADD_POST = 'ADD_POST'
const DELETE_POST = 'DELETE_POST'
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'
const SET_STATUS = 'SET_STATUS'

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
  status: ''
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

/* THUNKS */
export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getUserProfile(userId).then(response => {
    dispatch(setUserProfile(response.data))
  })
}
export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then(response => {
    dispatch(setStatus(response.data))
  })
}
export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then(response => {
    if (!response.data.resultCode) {
      dispatch(setStatus(status))
    }
  })
}

export default profileReducer