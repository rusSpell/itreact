import React, { Component } from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { getUserProfile } from '../../redux/profileReducer'
import { withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 14435;
    }
    this.props.getUserProfile(userId)
  }
  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})

export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withRouter,
  /* withAuthRedirect, */
)(ProfileContainer)
