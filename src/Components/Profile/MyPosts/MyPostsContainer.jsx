import React from 'react'
import { connect } from 'react-redux'

import { addPostActionCreator } from '../../../redux/profileReducer'
import MyPosts from './MyPosts'
import { compose } from 'redux'


let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText))
    },

  }
}

const MyPostsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  /* withAuthRedirect, */
)(MyPosts)
export default MyPostsContainer
