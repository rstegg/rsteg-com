import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { NavLink } from 'react-router-dom'

import { validate } from './validators'

import InputField from 'elements/InputField'
import MdField from 'elements/MdField'
import Button from 'elements/Button'

const EditPostForm = ({ handleSubmit }) =>
  <form onSubmit={handleSubmit}>
    <Field component={InputField} name='title' label='Name' placeholder='Post name' icon='heading' />
    <Field component={InputField} name='slug' label='Slug' placeholder='Post slug' icon='link'  />
    <Field component={InputField} name='preview' label='Preview' placeholder='Preview' icon='pen-alt' />
    <Field component={InputField} name='keywords' label='Search Keywords' placeholder='Keywords' icon='search' />
    <Field component={MdField} name='text' label='Body' placeholder='Blog post...' />
    <div className='field is-grouped'>
      <div className='control'>
        <Button color='primary'>Submit</Button>
      </div>
      <div className='control'>
        <Button as={NavLink} to='/blog'>Cancel</Button>
      </div>
    </div>
  </form>

const ConnectedEditPostForm = reduxForm({
  form: 'editPost',
  validate
})(EditPostForm)

const mapStateToProps = ({ blog }) =>
({
  initialValues: {
    ...blog.active,
    keywords: blog.active && blog.active.keywords ? blog.active.keywords.join(',') : ''
  }
})

export default connect(mapStateToProps)(ConnectedEditPostForm)