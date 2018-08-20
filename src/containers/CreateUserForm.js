import React, { Component } from 'react'

export default class PostForm extends Component {
  state = {
    email: '',
    password: '',
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleUserSubmit = e => {
    const { email, password } = this.state
    // const { addPost } = this.props;
    e.preventDefault()
    this.props.onSubmitUser(email, password)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleUserSubmit}>
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
