import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import { validate } from './validators'

import InputField from 'elements/InputField'
import AreaField from 'elements/AreaField'
import Button from 'elements/Button'

const Form = ({ onSubmit, children }) =>
  <form onSubmit={onSubmit}>
    {children}
  </form>

const CreatePostForm = ({ handleSubmit }) =>
  <Form onSubmit={handleSubmit}>
    <Field component={InputField} name='title' label='Name' placeholder='Post name' />
    <Field component={InputField} name='slug' label='Slug' placeholder='Post slug'  />
    <Field component={InputField} name='keywords' label='Search Keywords' placeholder='Keywords' />
    <Field component={AreaField} name='text' label='Body' placeholder='Blog post...' />
    <Button color='primary'>Submit</Button>
  </Form>

const ConnectedCreatePostForm = reduxForm({
  form: 'newPost',
  validate
})(CreatePostForm)

const mapStateToProps = ({ blog }) =>
({
  initialValues: blog.new
})

export default connect(mapStateToProps)(ConnectedCreatePostForm)
