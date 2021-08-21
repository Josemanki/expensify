import { expect } from '@jest/globals'
import authReducer from '../../reducers/auth'

test('Should correctly set uid for login', () => {
  const action = {
    type: 'LOGIN',
    uid: 'HwM1'
  }
  const state = authReducer({}, action)
  expect(state).toEqual({
    uid: action.uid
  })
})

test('Should correctly clear uid for logout', () => {
  const action = {
    type: 'LOGOUT'
  }
  const state = authReducer({uid: 'HwM1'}, action)
  expect(state).toEqual({})
})