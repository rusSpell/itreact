import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { Input } from '../common/FormsControls/FormsControls'
import { required } from '../../utils/validators/validators'
import { login } from '../../redux/authReducer'
import style from './Login.module.scss'

function LoginForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Input}
          name={'email'}
          placeholder={'E-mail'}
          validate={[required]}
        />
      </div>
      <div>
        <Field component={Input}
          name={'password'}
          type='password'
          placeholder={'Пароль'}
          validate={[required]}
        />
      </div>
      <div>
        <Field component={Input}
          name={'rememberMe'}
          type={'checkbox'}
        />
        Запомнить меня
      </div>
      {props.error && <div className={style._form_summary_error}>
        {props.error}
      </div>}
      <div>
        <button>Войти</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

function Login(props) {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }
  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }
  return (
    <div>
      <h1>АВТОРИЗАЦИЯ</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login)
