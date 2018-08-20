import { GET_POSTS, ADD_POST } from '../actions/posts'

export default (state = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return [...state, action.post]
    case GET_POSTS:
      return [...action.posts]
    default:
      return state
  }
}
