import { login, logout } from "../../actions/auth";

test('Should correctly setup login', () => {
  const uid = 'HwM1'
  const action = login(uid)
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  })
})

test('Should correctly setup logout', () => {
  const action = logout()
  expect(action).toEqual({
    type: 'LOGOUT'
  })
})