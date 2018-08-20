import { postsRef } from '../firebase'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const GET_POSTS = 'GET_POSTS'
export const ADD_POST = 'ADD_POST'

const addNewPost = post => ({
  type: ADD_POST,
  post,
})

// TODO: Why does this not work?
export const addPost = (postData = { title: '', description: '', image: '' }) => dispatch => {
  const post = {
    title: postData.title,
    description: postData.description,
    likeCounter: 0,
    image: postData.image,
  }
  postsRef.push(post).then(ref => dispatch(addNewPost({ postId: ref.key, ...post })))
}

const APP_API = posts => ({
  type: GET_POSTS,
  posts,
  // receivedAt: Date.now(),
})

export const getPosts = (posts = []) => dispatch =>
  postsRef
    .once('value', snapshot => {
      snapshot.forEach(post => {
        posts.push({
          postId: post.key,
          ...post.val(),
        })
      })
    })
    .then(() => dispatch(APP_API(posts)))
