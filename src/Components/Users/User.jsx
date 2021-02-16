import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Users.module.scss'

function User({ user, followingInProgress, follow, unfollow }) {
  return (
    <div className={`${style._wrapper} block`}>

      {
        <NavLink to={'/profile/' + user.id}>
          <img
            src={
              user.photos.small ?
                user.photos.small :
                'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
            }
            className={style._avatar}
            alt="user photo"
          />
        </NavLink>
      }

      <div>
        <h4>{user.name}</h4>
        <p>ID: {user.id}</p>
        <p>Урлнэйм: {user.uniqueUrlName}</p>
        <p>Статус: {user.status}</p>
        <div>
          {user.followed ?
            <button disabled={followingInProgress.some(id => id === user.id)}
              onClick={() => { unfollow(user.id) }}
              className={style._btn_red}
            >
              Отписаться
                  </button> :
            <button disabled={followingInProgress.some(id => id === user.id)}
              onClick={() => { follow(user.id) }} className={style._btn_blue}
            >
              Подписаться
                  </button>
          }
        </div>
      </div>
    </div>
  )
}

export default User
