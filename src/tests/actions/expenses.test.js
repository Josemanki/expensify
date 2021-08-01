import { expect } from "@jest/globals";
import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test('Should set up remove expense action object', () => {
  const action = removeExpense({ id: '123abc' })
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
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

test('Should set up add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    note: 'This was last months rent',
    amount: 109500,
    createdAt: 1000
  }
  const action = addExpense(expenseData)
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
}) 

test('Should set up add expense action object with default values', () => {
  const expenseData = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  }
  const action = addExpense()
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
}) 