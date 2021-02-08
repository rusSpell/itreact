import React from 'react'

import style from './Post.module.scss'
import avatar from '../../ProfileInfo/avatar(min).jpg'

function Post({ message, likeCount, dislikeCount }) {
  return (
    <div className={`${style.wrapper}`}>
      <img src={avatar} />
      <div className={`${style.item}`}>
        {message}
      </div>
      <div className={`${style.likes}`}>
        <span className={`${style.counter}`}>{likeCount}</span>
        <button className={`${style.like}`}>
          <svg className={`${style.like_svg}`}><use xlinkHref="#Like" /></svg>
        </button>
        <span className={`${style.counter}`}>{dislikeCount}</span>
        <button className={`${style.dislike}`}>
          <svg className={`${style.dislike_svg}`}><use xlinkHref="#Dislike" /></svg>
        </button>
      </div>
    </div>
  )
}

export default Post
