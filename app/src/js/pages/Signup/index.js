import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Card from 'elements/Card'

import { onSignupSubmit, resetSignup } from 'actions/signup'

import SignupForm from './form'

const ErrorMessage = msg =>
  <article className='message is-danger'>
    <div className='message-body'>
      {msg}
    </div>
  </article>

class Signup extends Component {
  componentWillMount() {
    const { resetSignup } = this.props
    resetSignup()
  }
  render() {
    const { user, onSignupSubmit } = this.props
    if (user.isAuthenticated) {
      return <Redirect to='/' />
    }
    return (
      <Card>
        <Card.Header>
          <Card.Title>Signup</Card.Title>
          <Card.Icon icon='arrow-alt-down' />
        </Card.Header>
        <Card.Content>
          <Card.Description>
            <SignupForm onSubmit={onSignupSubmit} />
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
  onSignupSubmit: user => dispatch(onSignupSubmit(user)),
  resetSignup: () => dispatch(resetSignup()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
