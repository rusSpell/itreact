import React from 'react'

import style from './ChatMessage.module.scss'

function ChatMessage({ id, message }) {
    return (
        <li key={id} className={`${style._message} block`}>
            <div>
                {message}
            </div>
        </li>
    )
}

export default ChatMessage
