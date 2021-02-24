import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Profile from './Profile'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { getUserProfile, getStatus, updateStatus, savePhoto } from '../../redux/profileReducer'

class ProfileContainer extends Component {
  refreshProfile() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.authorizedUserId; //14435 myID
      if (!userId) {
        this.props.history.push('/login')
      }
    }
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }
  componentDidMount() {
    this.refreshProfile()
  }
  componentDidUpdate(prevProps, prevStaste, snapshot) {
    if (this.props.match.params.userId != prevProps.match.params.userId) {
      this.refreshProfile()
    }
  }
  render() {
    return (
      <Profile {...this.props}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
        isFetching={this.props.isFetching}
      />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
  isFetching: state.profilePage.isFetching
})

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto }),
  withRouter,
  /* withAuthRedirect, */
)(ProfileContainer)
