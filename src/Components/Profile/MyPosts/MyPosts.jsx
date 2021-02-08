import React from 'react'
import style from './MyPosts.module.scss'
import Post from './Posts/Post'

/*-----  REACT COMPONENT ----*/
function MyPosts(props) {
  let postsComponent = props.posts.map(m => (<li key={m.id}><Post {...m} /></li>))
  let newPostElement = React.createRef()
  let onAddPost = () => {
    props.addPost()
    //dispatch(addPostActionCreator())
  }
  let onPostChange = () => {
    let text = newPostElement.current.value
    props.postChange(text)
    //dispatch(updateNewPostTextActionCreator(text))
  }

  return (
    <div className={`${style._item}`}>
      <h3>Страница профиля со стеной</h3>
      <form className={style._form} onSubmit={e => { e.preventDefault(); }}>
        <textarea 
        className={style._text} 
        ref={newPostElement} 
        onChange={onPostChange} 
        value={props.newPostText} 
        placeholder='Введите сообщение'
        />
        <button onClick={onAddPost}>Отправить</button>
      </form>
      <ul className={`${style._item_list}`}>
        {postsComponent}
      </ul>
    </div>
  )
}
export default MyPosts
