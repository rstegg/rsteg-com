import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Card from 'elements/Card'

import { onLoginSubmit, resetLogin } from 'actions/login'

import LoginForm from './form'

const ErrorMessage = msg =>
  <article className='message is-danger'>
    <div className='message-body'>
      {msg}
    </div>
  </article>

class Login extends Component {
  componentWillMount() {
    const { resetLogin } = this.props
    resetLogin()
  }
  render() {
    const { user, onLoginSubmit } = this.props
    if (user.isAuthenticated) {
      return <Redirect to='/' />
    }
    return (
      <Card>
        <Card.Header>
          <Card.Title>Login</Card.Title>
          <Card.Icon icon='sign-in-alt' />
        </Card.Header>
        <Card.Content>
          <Card.Description>
            <LoginForm onSubmit={onLoginSubmit} />
            {!!user.error && ErrorMessage(user.error)}
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}

const mapStateToProps = ({ user }) =>
({
  user,
})

const mapDispatchToProps = dispatch =>
({
  onLoginSubmit: user => dispatch(onLoginSubmit(user)),
  resetLogin: () => dispatch(resetLogin()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
