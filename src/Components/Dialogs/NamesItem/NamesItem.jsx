import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './NamesItem.module.scss'

function NamesItem({ id, name }) {
    return (
        <li className={`${style._names_item} `}>
            <NavLink to={`/dialogs/${id}`} className={`${style._names_link} block`} activeClassName={style.active}>{name}</NavLink>
        </li>
    )
}

export default NamesItem
