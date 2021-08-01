import expenses from '../fixtures/expenses'
import expensesReducer from '../../reducers/expenses'

test('Should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual([])
})

test('Should remove expense by ID', () => {
  const action = { 
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
   }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[0], expenses[2]])
})

test('Should not remove expenses if ID not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: -1
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

test('Should add an expense', () => {
  const expense = {
    id: '4',
    description: 'Gummy bears',
    note: '',
    amount: 1950,
    createdAt: 0
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([...expenses, expense]) 
})

test('Should edit an expense', () => {
  const updates = {
    note: 'This is a note'
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates
  }
  const state = expensesReducer(expenses, action)
  expect(state[0].note).toBe('This is a note')
})

test('Should not edit an expense if not found', () => {
  const updates = {
    note: 'This is a note'
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})