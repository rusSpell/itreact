import React, { useState } from 'react'
import style from './Paginator.module.scss'

function Paginator({ currentPage, totalItemsCount, pageSize, onPageClick, portionSize = 10 }) {
  let pagesCount = Math.ceil(totalItemsCount / pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  let portionCount = Math.ceil(pagesCount / portionSize)
  let [portionNumber, setPortionNumber] = useState(1)
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  let rightPortionPageNumber = portionNumber * portionSize

  return (
    <div className={`${style._paginator}`}>
      {portionNumber > 1 && <button onClick={() => { setPortionNumber(portionNumber - 1) }}>←</button>}
      {
        pages
          .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
          .map((p) => {
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
      {portionCount > portionNumber && <button onClick={() => { setPortionNumber(portionNumber + 1) }}>→</button>}
    </div>)
}
export default Paginator
