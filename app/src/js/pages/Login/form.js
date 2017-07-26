import React from 'react'

import { Field, reduxForm } from 'redux-form'

import Button from 'elements/Button'
import InputField from 'elements/InputField'

const LoginForm = ({ handleSubmit, submitting }) =>
  <form onSubmit={handleSubmit}>
    <Field component={InputField} name='username' type='text' label='Username' control='input' placeholder='Username' icon='user' />
    <Field component={InputField} name='password' type='password' label='Password' control='input' placeholder='Password' icon='lock-alt' />
    <Button loading={submitting} type='submit' color='primary'>Log in</Button>
  </form>

export default reduxForm({
  form: 'login'
})(LoginForm)
