import React from 'react'

import style from './Header.module.scss'

import itReact from './itReact.svg'
import { NavLink } from 'react-router-dom'

function Header(props) {
  return (
    <header className={style.header} >
      <div className="container">
        <div className={style.header__inner}>
          <a href='/'><img src={itReact} className={style.header__logo} alt="Logo" /></a>
          <h1>Привет, это React JS</h1>

          <ul className={style.header__nav}>
            <li className={style.header__nav_item}><a href="#!">Home</a></li>
            <li className={style.header__nav_item}><a href="#!">News Feed</a></li>
            <li className={style.header__nav_item}>
              {props.isAuth
                ? <>{props.login} <a href="#!" onClick={props.logout}>- Выйти</a></> 
                : <NavLink to={'/login'} >Войти</NavLink>
              }
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
