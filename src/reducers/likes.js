export default (state = {}, action) => {
  switch (action.type) {
    case 'POSTS_CHILD_UPDATED':
      return {
        ...state,
        key: action.payload,
      }
    default:
      return state
  }
}
