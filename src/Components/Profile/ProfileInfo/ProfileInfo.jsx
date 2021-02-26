import React, { useState } from 'react'

/* import ProfileStatus from './ProfileStatus' */
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import ProfileDataForm from './ProfileDataForm'

import style from './ProfileInfo.module.scss'
import avatar from './avatar.jpg'
import Preloader from '../../common/Preloader/Preloader'

function ProfileInfo({ profile, status, updateStatus, isOwner, savePhoto, isFetching, saveProfile }) {

  if (!profile) {
    return <Preloader />
  }

  const [editMode, setEditMode] = useState(false)
  const activateEditMode = () => {
    setEditMode(true)
  }
  const deactivateEditMode = () => {
    setEditMode(false)
  }
  const onPhotoSelector = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }
  const onSubmit = (formData) => {
    saveProfile(formData)
    // deactivateEditMode() 
  }
  debugger
  return (
    <div className={style._wrapper}>
      <div>
        {isFetching ? <Preloader /> :
          <img className={style._avatar} src={profile.photos.large || avatar} alt="avatar" />
        }

        {isOwner && <div><input type={'file'} onChange={onPhotoSelector} /></div>}
      </div>
      <div>
        {
          isFetching ? <Preloader /> :
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} isOwner={isOwner} /> &&
              editMode ?
              <ProfileDataForm
                initialValues={profile}
                profile={profile}
                onSubmit={onSubmit}
                deactivateEditMode={deactivateEditMode}
              /> :
              <ProfileData
                profile={profile}
                isOwner={isOwner}
                activateEditMode={activateEditMode}
              />
        }
      </div>
    </div>
  )
}

const ProfileData = ({ profile, isOwner, activateEditMode }) => {
  return (
    <div className={style._about}>
      <p>Имя: {profile.fullName}</p>

      <p>Обо мне: {profile.aboutMe}</p>
      {profile.lookingForAJob && <p>Я в поиске</p>}
      {profile.lookingForAJobDescription && <p>Описание: {profile.lookingForAJobDescription}</p>}

      <p>Контакты:</p>
      {
        Object.keys(profile.contacts).map((value, index) => {
          return profile.contacts[value] && (<p key={index}> {value}: {profile.contacts[value]} </p>)
        })
      }
      {isOwner && <button onClick={activateEditMode}>Редактировать</button>}
    </div>
  )
}


export default ProfileInfo
