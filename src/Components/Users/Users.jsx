import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Users.module.scss'
function Users(props) {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  return (
    <div>
      <div className={`${style._paginator}`}>
        {
          pages.map(p => {
            return (
              <span
                key={p}
                className={`${props.currentPage === p ? style._selected : ''} ${style._paginator_btn}`}
                onClick={(e) => { props.onPageClick(p) }}
              >
                {p}
              </span>
            )
          })
        }
      </div>
      <h4>Список всех пользователей (всего: {props.totalUsersCount})</h4>
      {
        props.users.map(u =>
          <div key={u.id} className={`${style._wrapper} block`}>

            {
              <NavLink to={'/profile/' + u.id}>
                <img
                  src={
                    u.photos.small ?
                      u.photos.small :
                      'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
                  }
                  className={style._avatar}
                  alt="user photo"
                />
              </NavLink>
            }

            <div>
              <h4>{u.name}</h4>
              <p>ID: {u.id}</p>
              <p>Урлнэйм: {u.uniqueUrlName}</p>
              <p>Статус: {u.status}</p>
              <div>
                {u.followed ?
                  <button disabled={props.followingInProgress.some(id => id === u.id)}
                    onClick={() => { props.unfollow(u.id) }}
                    className={style._btn_red}
                  >
                    Отписаться
                  </button> :
                  <button disabled={props.followingInProgress.some(id => id === u.id)}
                    onClick={() => { props.follow(u.id) }} className={style._btn_blue}
                  >
                    Подписаться
                  </button>
                }
              </div>
            </div>
          </div>)
      }
    </div>
  )
}

export default Users
