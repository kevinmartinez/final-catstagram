import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { addComment } from '../actions/comments'

const Comment = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  border-bottom: 2px solid purple;
  p {
    font-size: 20px;
    text-transform: uppercase;
  }
`

class Comments extends Component {
  state = {
    text: '',
  }

  // Write handlers and get values from names
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleCommentSubmit = e => {
    e.preventDefault()
    const postId = this.props.match.params.postId
    const { text } = this.state
    // Dispatch redux thunk
    this.props.dispatch(
      addComment({
        text,
        postId,
        author: postId,
      })
    )

    this.setState({ text: '' })
  }

  renderComments() {
    const { postComments } = this.props
    return (
      this.props.postComments &&
      Object.keys(this.props.postComments).map(item => <Comment>{postComments[item].text}</Comment>)
    )
  }

  render() {
    const { text } = this.state

    return (
      <Fragment>
        <div>
          <section>{this.renderComments()}</section>
          <div>
            <form onSubmit={this.handleCommentSubmit}>
              <fieldset>
                <legend>Write a nice comment</legend>
                <label htmlFor="text">Comment Text</label>
                <input
                  value={text}
                  type="text"
                  name="text"
                  placeholder="Comment"
                  onChange={this.handleInputChange}
                />
                <input type="submit" value="Send" />
              </fieldset>
            </form>
          </div>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  comments: state.comments,
})
export default connect(mapStateToProps)(Comments)
