import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Dialogs from './Dialogs'
import { sendMessageActionCreator } from '../../redux/dialogsReducer'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'



let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    onSendMessage: (newMessageText) => {
      dispatch(sendMessageActionCreator(newMessageText))
    },
  }
}
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(Dialogs)
