import { usersAPI } from '../api/api'

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'

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
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 6,
                message: state.newPostText,
                likeCount: 0,
                dislikeCount: 0
            }
            let stateCopy = {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USERS_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = () =>
    ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const setUserProfile = (profile) =>
    ({ type: SET_USERS_PROFILE, profile })

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getUserProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}


export default profileReducer