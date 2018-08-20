import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './global-styles'
import * as postsActionCreators from './actions/posts'
import * as commentsActionCreators from './actions/posts'
import Main from './components/Main'

const mapStateToProps = state => ({
  posts: state.posts,
  comments: state.comments,
  likes: state.likes,
  auth: state.auth,
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(postsActionCreators, commentsActionCreators, dispatch),
})

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     dispatch1: () => {
//       dispatch(actionCreator)
//     }
//   }
// }

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)

export default App
