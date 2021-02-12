import React from 'react'

/* import ProfileStatus from './ProfileStatus' */
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

import style from './ProfileInfo.module.scss'
import avatar from './avatar.jpg'
import Preloader from '../../common/Preloader/Preloader'
function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={style._wrapper}>
            <img className={style._avatar} src={props.profile.photos.large || props.profile.photos.small ? props.profile.photos.large || props.profile.photos.small : avatar} alt="avatar" />
            <div className={style._about}>
                <p>Имя: {props.profile.fullName}</p>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                <p>Обо мне: {props.profile.aboutMe}</p>
                <p>Дата регистрации: 01.01.1970</p>
            </div>
        </div>
    )
}

export default ProfileInfo
