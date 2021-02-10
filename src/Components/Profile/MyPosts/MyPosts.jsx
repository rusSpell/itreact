import React from 'react'
import { Field, reduxForm } from 'redux-form'

import {required, maxLengthCreator} from '../../../utils/validators/validators'
import style from './MyPosts.module.scss'
import Post from './Posts/Post'
import { Textarea } from '../../common/FormsControls/FormsControls'

const maxLength100 = maxLengthCreator(100)

function AddPostForm(props) {
  return (
    <form className={style._form} onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea}
          name='newPostText'
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
const AddPostReduxForm = reduxForm({ form: 'myPostsAddPostForm' })(AddPostForm)

function MyPosts(props) {
  let postsComponent = props.posts.map(m => (<li key={m.id}><Post {...m} /></li>))
  let addNewPost = (values) => {
    props.addPost(values.newPostText)
  }
  return (
    <div className={`${style._item}`}>
      <h3>Страница профиля со стеной</h3>
      <AddPostReduxForm onSubmit={addNewPost} />
      <ul className={`${style._item_list}`}>
        {postsComponent}
      </ul>
    </div>
  )
}
export default MyPosts
