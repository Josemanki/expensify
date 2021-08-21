import { expect } from "@jest/globals";
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import database from '../../firebase/firebase'
import { 
  addExpense, 
  startEditExpense, 
  editExpense, 
  removeExpense, 
  startAddExpense, 
  setExpenses, 
  startSetExpenses, 
  startRemoveExpense 
} from "../../actions/expenses";
import expenses from '../fixtures/expenses'

const uid = 'thisismytestuid'
const defaultAuthState = { auth: { uid } }
const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
  const expensesData = {}
  expenses.forEach(({id, description, note, amount, createdAt}) => {
    expensesData[id] = { description, note, amount, createdAt }
  })
  database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done())
})

test('Should set up remove expense action object', () => {
  const action = removeExpense({ id: '123abc' })
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

test('Should remove expenses from firebase', (done) => {
  const store = createMockStore(defaultAuthState)
  const id = expenses[2].id
  store.dispatch(startRemoveExpense({ id })).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id
    })
    return database.ref(`users/${uid}/expenses/${id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy()
    done()
  })
})

test('Should set up edit expense', () => {
  const action = editExpense('123abc', { note: 'New note value'})
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'New note value'
    } 
  })
}) 

test('Should edit expenses from firebase', (done) => {
  const store = createMockStore(defaultAuthState)
  const id = expenses[1].id
  const updates = {
    amount: 12345
  }
  store.dispatch(startEditExpense(id, updates)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'EDIT_EXPENSE',
      id,
      updates: {
        amount: 12345
      }
    })
    return database.ref(`users/${uid}/expenses/${id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val().amount).toBe(updates.amount)
    done()
  })
})


test('Should set up add expense action object with provided values', () => {
  const action = addExpense(expenses[2])
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  })
}) 

test('Should add expense to database and store', (done) => {
  const store = createMockStore(defaultAuthState)
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 1000
  }
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    })

    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
  }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData)
      done()
  })
})

test('Should add expense to database and store', (done) => {
  const store = createMockStore(defaultAuthState)
  const expenseDefaults = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  }
  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseDefaults
      }
    })

    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseDefaults)
    done()
  })
})

test('Should set up setExpense action object with data', () => {
  const action = setExpenses(expenses)
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  })
})

test('Should fetch the expenses from Firebase', (done) => {
  const store = createMockStore(defaultAuthState)
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    })
    done()
  })
})