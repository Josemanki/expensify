import { expect } from '@jest/globals'
import getExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('Should return 0 if no expenses', () => {
  const total = getExpensesTotal([])
  expect(total).toBe(0)
})

test('Should correctly add up a single expense', () => {
  const total = getExpensesTotal([expenses[1]])
  expect(total).toBe(109500)
})

test('Should correctly add up expenses', () => {
  const total = getExpensesTotal(expenses)
  expect(total).toBe(114195)
}) 