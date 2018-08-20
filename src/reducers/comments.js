export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return { ...state, comment: action.comment }
    case 'GET_POST_COMMENTS':
      return action.payload
    default:
      return state
  }
}
