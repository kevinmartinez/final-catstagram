import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import auth from './auth'
import posts from './posts'
import comments from './comments'
import likes from './likes'

export default combineReducers({
  posts,
  auth,
  comments,
  likes,
  routing: routerReducer,
})
