import profileReducer, { addPostActionCreator, deletePost } from './profileReducer'

let state = {
  posts: [
    { id: 1, message: 'Привет, как твои дела?', likeCount: 0, dislikeCount: 0 },
    { id: 2, message: 'Когда начнем писать на реакте?', likeCount: 0, dislikeCount: 0 },
    { id: 3, message: 'Реакт, это интересно', likeCount: 0, dislikeCount: 0 },
    { id: 4, message: 'Дальше действвать будем мы!', likeCount: 0, dislikeCount: 0 },
    { id: 5, message: 'Привет, как твои дела?', likeCount: 0, dislikeCount: 0 },
  ]
}

test('length of posts should be incremented', () => {
  // 1. test data
  let action = addPostActionCreator('Test string for addpost')
  // 2. action
  let newState = profileReducer(state, action)
  // 3. expectation
  expect(newState.posts.length).toBe(6)
  expect(newState.posts[5].message).toBe('Test string for addpost')
})

test('message of new post should be correct', () => {
  // 1. test data
  let action = addPostActionCreator('Test string for addpost')
  // 2. action
  let newState = profileReducer(state, action)
  // 3. expectation
  expect(newState.posts[5].message).toBe('Test string for addpost')
})

test('after deleting length of messages should be decrement', () => {
  // 1. test data
  let action = deletePost(5)
  // 2. action
  let newState = profileReducer(state, action)
  // 3. expectation
  expect(newState.posts.length).toBe(4)
})

test('after deleting length should not decrease if id is incorrect', () => {
  // 1. test data
  let action = deletePost(1000)
  // 2. action
  let newState = profileReducer(state, action)
  // 3. expectation
  expect(newState.posts.length).toBe(5)
})