import * as actions from './comments'
import * as types from '../constants/ActionTypes'

describe('actions', () => {
  it('should create an action to add a comment', () => {
    const text = 'Finish docs'
    const expectedAction = {
      type: types.ADD_COMMENT,
      text,
    }
    expect(actions.addComment(text)).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action to remove a comment', () => {
    const text = 'Comments Removed'
    const expectedAction = {
      type: types.REMOVE_COMMENT,
      text,
    }
    expect(actions.removeComment(text)).toEqual(expectedAction)
  })
})
