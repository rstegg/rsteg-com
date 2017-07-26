import React from 'react'

import { Field, reduxForm } from 'redux-form'

import Button from 'elements/Button'
import InputField from 'elements/InputField'

import { validate, asyncValidate } from './validators'

const Signup = ({ handleSubmit, submitting }) =>
  <form onSubmit={handleSubmit}>
    <Field component={InputField} name='username' label='Username' placeholder='Username' icon='user' />
    <Field component={InputField} name='email' type='email' label='Email' placeholder='Email' icon='paper-plane' />
    <Field component={InputField} name='password' type='password' label='Password' placeholder='Password' icon='lock-alt' />
    <Button loading={submitting} type='submit' color='primary'>Sign up</Button>
  </form>

export default reduxForm({
  form: 'signup',
  validate,
  asyncValidate,
  asyncBlurFields: [ 'username', 'email' ]
})(Signup)
