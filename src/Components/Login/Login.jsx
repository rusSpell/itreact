import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Input } from '../common/FormsControls/FormsControls'
import { required } from '../../utils/validators/validators'

function LoginForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Input}
          name={'login'}
          placeholder={'Имя пользователя'}
          validate={[required]}
        />
      </div>
      <div>
        <Field component={Input}
          name={'password'}
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
      <div>
        <button>Войти</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

function Login() {
  const onSubmit = (formData) => {
    console.log(formData);
  }
  return (
    <div>
      <h1>АВТОРИЗАЦИЯ</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

export default Login
