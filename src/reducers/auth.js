export default (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        ...state,
        payload: action.payload,
      }
    case 'LOGIN':
      return {
        uid: action.uid,
      }
    case 'EMAIL_LOGIN':
      return {
        ...state,
        user: action.user,
        error: action.error.message,
      }
    case 'LOGOUT':
      return {}
    default:
      return state
  }
}
