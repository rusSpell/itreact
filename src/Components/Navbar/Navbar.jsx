import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Navbar.module.scss'

function Navbar({ state }) {

  let friendsComponent = state.friends.map(({ id, name, avatar }) => (
    <li key={id}>
      <a className={style._friend_wrapper} href="">
        <img className={style._friend_pic} src={avatar} alt="avatar" />
        {name}
      </a>
    </li>
  ))
  return (
    <nav className={style.nav}>
      <ul className={style.nav__list}>
        <li className={style.nav__item}><NavLink exact to="/" className={style.nav__link} activeClassName={style.active}>Профиль</NavLink></li>
        <li className={style.nav__item}><NavLink to="/dialogs" className={style.nav__link} activeClassName={style.active}>Диалоги</NavLink></li>
        <li className={style.nav__item}><NavLink to="/news" className={style.nav__link} activeClassName={style.active}>Новости</NavLink></li>
        <li className={style.nav__item}><NavLink to="/users" className={style.nav__link} activeClassName={style.active}>Пользователи</NavLink></li>
        <li className={style.nav__item}><NavLink to="/music" className={style.nav__link} activeClassName={style.active}>Музыка</NavLink></li>
        <li className={style.nav__item}><NavLink to="/settings" className={style.nav__link} activeClassName={style.active}>Настройки</NavLink></li>
      </ul>
      <hr></hr>
      <ul className={style.nav__list}>
        <h4>Друзья</h4>
        {friendsComponent}


      </ul>
    </nav>
  )
}

export default Navbar
