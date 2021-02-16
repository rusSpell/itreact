import React from 'react'
import style from './Paginator.module.scss'

function Paginator({ currentPage, totalUsersCount, pageSize, onPageClick }) {
  let pagesCount = Math.ceil(totalUsersCount / pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  return (
    <div className={`${style._paginator}`}>
      {
        pages.map(p => {
          return (
            <span
              key={p}
              className={`${currentPage === p ? style._selected : ''} ${style._paginator_btn}`}
              onClick={(e) => { onPageClick(p) }}
            >
              {p}
            </span>
          )
        })
      }
    </div>)
}
export default Paginator
