import React from 'react'

import NamesItem from './NamesItem/NamesItem.jsx'
import ChatMessage from './ChatMessage/ChatMessage.jsx'


import style from './Dialogs.module.scss'

function Dialogs({ onSendMessage, updateNewMessageText, dialogsPage, isAuth }) {
  let users = dialogsPage.users
  let messages = dialogsPage.messages
  let newMessageText = dialogsPage.newMessageText
  let namesComponent = users.map(({ id, name }) => (<NamesItem id={id} name={name}  key={id}/>))
  let messagesComponent = messages.map(({ id, message }) => (<ChatMessage id={id} message={message} key={id}/>))

  let newMessageElement = React.createRef()
  let scrollChatElement = React.createRef()
  let onSendMessageClick = () => {
    onSendMessage()
    //store.dispatch(sendMessageActionCreator())
    scrollChatElement.current.scrollTop = scrollChatElement.current.scrollHeight
  }
  let onNewMessageChange = (e) => {
    let text = e.target.value
    updateNewMessageText(text)
    //store.dispatch(updateNewMessageTextCreator(text))
  }
  return (
    <div className={`${style._wrapper}`}>
      <ul className={`${style._names_list}`}>
        {namesComponent}
      </ul>
      <ul className={`${style._chat}`}>
        <div className={`${style._chat_wrapper}`} ref={scrollChatElement}>{messagesComponent}</div>
        <form className={style._form} onSubmit={e => e.preventDefault()} >
          <textarea
            className={style._text}
            ref={newMessageElement}
            onChange={onNewMessageChange}
            value={newMessageText}
            placeholder="Введите сообщение">
          </textarea>
          <button onClick={onSendMessageClick}>Отправить</button>
        </form>
      </ul>
    </div>
  )
}

export default Dialogs
