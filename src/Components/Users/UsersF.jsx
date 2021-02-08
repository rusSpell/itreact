import React from 'react'
import style from './Users.module.scss'
import * as axios from 'axios'
function Users(props) {
  
  let getUsers = () => {
    if (props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
          props.setUsers(response.data.items)
        })
    }
  }
  
  return (
    <div>
      <h4>Список всех пользователей</h4>
      <button onClick={getUsers}>Загрузить пользователей</button>
      {
        props.users.map(u =>
          <div key={u.id} className={`${style._wrapper} block`}>

            {
              <img src={ u.photos.small ? u.photos.small : 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'} className={style._avatar} alt="user photo" />
            }
            
            <div>
              <h4>{u.name}</h4>
              <p>{u.id}</p>
              <p>{u.uniqueUrlName}</p>
              <p>{u.status}</p>
              <div>
                {u.followed ?
                  <button onClick={() => {props.unfollow(u.id)}}> Отписаться </button> :
                  <button onClick={() => {props.follow(u.id)}}> Подписаться </button>
                }
              </div>
            </div>
          </div>)
      }
    </div>
  )
}

export default Users
