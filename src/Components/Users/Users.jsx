import React from 'react'
import User from './User'
import Paginator from '../common/Paginator/Paginator'
function Users({ users, currentPage, totalUsersCount,
  pageSize, onPageClick, followingInProgress, follow, unfollow }) {

  return (
    <div>
      <Paginator currentPage={currentPage} onPageClick={onPageClick}
        totalItemsCount={totalUsersCount} pageSize={pageSize} />
      <h4>Список всех пользователей (всего: {totalUsersCount})</h4>
      {
        users.map(u => <User user={u} followingInProgress={followingInProgress}
          follow={follow} unfollow={unfollow} key={u.id} />)
      }
    </div>
  )
}

export default Users
