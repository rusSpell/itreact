import React from 'react'
import { Field, reduxForm } from 'redux-form'

import NamesItem from './NamesItem/NamesItem.jsx'
import ChatMessage from './ChatMessage/ChatMessage.jsx'

import style from './Dialogs.module.scss'
import { Textarea } from '../common/FormsControls/FormsControls.jsx'
import { required, maxLengthCreator } from '../../utils/validators/validators.js'

const maxLength100 = maxLengthCreator(100)

function AddMessageForm(props) {
  return (
    <form className={style._form} onSubmit={props.handleSubmit} >
      <div>
        <Field component={Textarea}
          name={'newMessageText'}
          className={style._text}
          placeholder='Введите сообщение' 
          validate={[required, maxLength100]}/>
      </div>
      <div>
        <button>Отправить</button>
      </div>
    </form>
  )
}
const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)

function Dialogs({ onSendMessage, dialogsPage }) {
  let users = dialogsPage.users
  let messages = dialogsPage.messages
  let namesComponent = users.map(({ id, name }) => (<NamesItem id={id} name={name} key={id} />))
  let messagesComponent = messages.map(({ id, message }) => (<ChatMessage id={id} message={message} key={id} />))


  let scrollChatElement = React.createRef()

  let addNewMessage = (values) => {
    onSendMessage(values.newMessageText)
    scrollChatElement.current.scrollTop = scrollChatElement.current.scrollHeight
  }
  return (
    <div className={`${style._wrapper}`}>
      <ul className={`${style._names_list}`}>
        {namesComponent}
      </ul>
      <ul className={`${style._chat}`}>
        <div className={`${style._chat_wrapper}`} ref={scrollChatElement}>{messagesComponent}</div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </ul>
    </div>
  )
}

export default Dialogs
