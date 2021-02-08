import React from 'react'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import Dialogs from './Dialogs'
import { sendMessageActionCreator, updateNewMessageTextCreator } from '../../redux/dialogsReducer'

import { connect } from 'react-redux'
import { compose } from 'redux'

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextCreator(text))
    },
    onSendMessage: () => {
      dispatch(sendMessageActionCreator())
    },

  }
}
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(Dialogs)
