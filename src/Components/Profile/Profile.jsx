import React from 'react'

import MyPostsContainer from './MyPosts/MyPostsContainer.jsx'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'

import style from './Profile.module.css'

import autumn from './autumn.webp'

function Profile(props) {
  return (
    <div >
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
      <img src={autumn} className={style.content__images} alt="autumn" />
      <MyPostsContainer />
    </div>
  )
}
export default Profile
