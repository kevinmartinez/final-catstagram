import React, { Component, Fragment } from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Post from '../components/Post'
import Comments from './Comments'

class Simple extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    // Match posts index
    const { postId } = this.props.match.params
    const i = this.props.posts.findIndex(post => post.postId === postId)
    const currentPost = this.props.posts[i]
    const postComments = this.props.comments[postId]

    return (
      <Fragment>
        <section>
          <Post i={i} post={currentPost} {...currentPost} />
          <Comments postComments={postComments} {...this.props} />
        </section>
      </Fragment>
    )
  }
}

Simple.propTypes = {}

const mapStateToProps = state => ({
  posts: state.posts,
  comments: state.comments,
  auth: state.auth,
})

export default connect(mapStateToProps)(Simple)
