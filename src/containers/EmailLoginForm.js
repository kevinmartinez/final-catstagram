import React, { Component } from 'react'

export default class EmailLoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: false,
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleLoginSubmit = e => {
    e.preventDefault()
    const { email, password, error } = this.state
    this.props.onSubmitLogin(email, password, error)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleLoginSubmit}>
          <div className="input-field">
            <input placeholder="email" name="email" onChange={this.handleInputChange} type="text" />
            <input
              placeholder="password"
              name="password"
              onChange={this.handleInputChange}
              type="text"
            />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}
