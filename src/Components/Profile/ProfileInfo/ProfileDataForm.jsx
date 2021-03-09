import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input, Textarea } from '../../common/FormsControls/FormsControls'
import { required, maxLengthCreator } from '../../../utils/validators/validators'

import style from './ProfileInfo.module.scss'

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  const maxLength100 = maxLengthCreator(100)
  const maxLength500 = maxLengthCreator(500)
  return (
    <form onSubmit={handleSubmit}>
      <p>Имя: </p>
      <Field component={Input}
        name={'fullName'}
        placeholder={'Ваше имя'}
        validate={[required]}
      />
      <p>Обо мне: </p>
      <Field component={Textarea}
        name={'aboutMe'}
        placeholder={'Обо мне'}
        validate={[maxLength100]}
      />
      <p>Я в поиске?</p>
      <Field component={Input}
        name={'lookingForAJob'}
        type={'checkbox'}
      />
      {<p>Описание навыков: </p>}
      <Field component={Textarea}
        name={'lookingForAJobDescription'}
        placeholder={'Ваши навыки?'}
        validate={[maxLength500]}
      />
      <p>Контакты:</p>
      {
        Object.keys(profile.contacts).map((value, index) => {
          return (
            <div key={index}> {value}:
              {<Field component={Input}
                name={'contacts.' + value}
                placeholder={value}
                validate={[maxLength100]}
              />}
            </div>
          )
        })
      }
      {error && <div className={style._form_summary_error}>
        {error}
      </div>}
      <div>
        <button>Сохранить</button>
      </div>
    </form>
  )
}

const ProfileDataReduxForm = reduxForm({ form: 'EditProfile' })(ProfileDataForm)

export default ProfileDataReduxForm