import React from 'react'

/* import ProfileStatus from './ProfileStatus' */
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

import style from './ProfileInfo.module.scss'
import avatar from './avatar.jpg'
import Preloader from '../../common/Preloader/Preloader'
function ProfileInfo({ profile, status, updateStatus, isOwner, savePhoto, isFetching }) {
  if (!profile) {
    return <Preloader />
  }
  const onPhotoSelector = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }
  return (
    <div className={style._wrapper}>
      <div>
        {isFetching ? <Preloader /> :
          <img className={style._avatar} src={profile.photos.large || avatar} alt="avatar" />
        }

        {isOwner && <div><input type={'file'} onChange={onPhotoSelector} /></div>}
      </div>
      {
        isFetching ? <Preloader /> :
          <div className={style._about}>
            <p>Имя: {profile.fullName}</p>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} isOwner={isOwner} />
            <p>Обо мне: {profile.aboutMe}</p>
            {profile.lookingForAJob && <p>Я в поиске</p>}
            {profile.lookingForAJobDescription && <p>Описание: {profile.lookingForAJobDescription}</p>}
            
            <p>Контакты:</p>
            {
              Object.keys(profile.contacts).map((value, index) => {
              return profile.contacts[value] && (<p key={index}> {value}: {profile.contacts[value]} </p>)
              })
            }
          </div>
      }
    </div>
  )
}

export default ProfileInfo
