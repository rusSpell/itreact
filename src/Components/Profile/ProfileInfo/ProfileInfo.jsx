import React from 'react'

/* import ProfileStatus from './ProfileStatus' */
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

import style from './ProfileInfo.module.scss'
import avatar from './avatar.jpg'
import Preloader from '../../common/Preloader/Preloader'
function ProfileInfo({ profile, status, updateStatus }) {
    if (!profile) {
        return <Preloader />
    }

    return (
        <div className={style._wrapper}>
            <img className={style._avatar} src={profile.photos.large || profile.photos.small ? profile.photos.large || profile.photos.small : avatar} alt="avatar" />
            <div className={style._about}>
                <p>Имя: {profile.fullName}</p>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                <p>Обо мне: {profile.aboutMe}</p>
                <p>Дата регистрации: 01.01.1970</p>
            </div>
        </div>
    )
}

export default ProfileInfo
