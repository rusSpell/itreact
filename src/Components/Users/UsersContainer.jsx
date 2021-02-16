import React from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import { follow, unfollow, setCurrentPage, requestUsers } from '../../redux/usersReducer'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import {
  getUsers, getPageSize, getTotalUsersCount,
  getCurrentPage, getIsFetching, getFollowingInProgress
} from '../../redux/usersSelectors'
class UsersContainer extends React.Component {
  componentDidMount() {
    const { currentPage, pageSize } = this.props
    this.props.requestUsers(currentPage, pageSize)
  }

  onPageClick = (pageNumber) => {
    const { pageSize } = this.props
    this.props.requestUsers(pageNumber, pageSize)
  }
  render() {
    return (<>
      {this.props.isFetching ? <Preloader /> : null}
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        onPageClick={this.onPageClick}
        followingInProgress={this.props.followingInProgress}
      />
    </>
    )
  }
}

/* let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
} */
let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

export default compose(
  connect(mapStateToProps, { follow, unfollow, setCurrentPage, requestUsers, }),
  /* withAuthRedirect, */
)(UsersContainer)
