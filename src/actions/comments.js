import { commentsRef } from '../firebase'

export const getPostComments = () => async dispatch => {
  commentsRef.on('value', snapshot => {
    // console.log(snapshotToArray(snapshot))
    dispatch({
      type: 'GET_POST_COMMENTS',
      payload: snapshot.val(),
    })
  })

  commentsRef.on('child_added', () => {
    console.log('child added')
  })
}

export const ADD_COMMENT = 'ADD_COMMENT'

const addNewComment = comment => ({
  type: ADD_COMMENT,
  comment,
})

export const addComment = (commentData = { text: '', postId: '', author: '' }) => dispatch => {
  const comment = {
    text: commentData.text,
    postId: commentData.postId,
    author: commentData.author,
  }
  return commentsRef
    .child(`${commentData.postId}`)
    .push(comment)
    .then(() => dispatch(addNewComment({ ...comment })))
}

// TODO: DOIT
export const removeComment = text => ({
  type: 'REMOVE_COMMENT',
  text,
})
