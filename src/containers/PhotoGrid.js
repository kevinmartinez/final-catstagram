import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Post from '../components/Post'
import PostForm from '../containers/PostForm'
import { firebaseLogout } from '../actions/auth'

class PhotoGrid extends Component {
  render() {
    return (
      <Fragment>
        <section>
          <h2>
            <span>&#43;</span> Ny Bild
          </h2>
          <PostForm />
          <header>
            <button onClick={this.props.logout}>Logout</button>
          </header>
        </section>
        {this.props.posts.map((post, i) => (
          <Fragment>
            <Post
              key={post.postId}
              i={i}
              id={post.postId}
              title={post.title}
              image={post.image}
              link={`${post.postId}`}
            />
          </Fragment>
        ))}
      </Fragment>
    )
  }
}

// PhotoGrid.propTypes = {
//   selectedSubreddit: PropTypes.string.isRequired,
//   posts: PropTypes.array.isRequired,
//   isFetching: PropTypes.bool.isRequired,
//   lastUpdated: PropTypes.number,
//   dispatch: PropTypes.func.isRequired
// }

const mapStateToProps = state => ({
  posts: state.posts,
  comments: state.comments,
  auth: state.auth,
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(firebaseLogout()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoGrid)
