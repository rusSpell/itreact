import React from 'react'

import MyPostsContainer from './MyPosts/MyPostsContainer.jsx'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'

import style from './Profile.module.css'

function Profile(props) {
  return (
    <div >
      <ProfileInfo
        profile={props.profile}
        isOwner={props.isOwner}
        status={props.status}
        updateStatus={props.updateStatus}
        savePhoto={props.savePhoto}
        isFetching={props.isFetching} />
      <br />
      <hr />
      <MyPostsContainer />
    </div>
  )
}
export default Profile
