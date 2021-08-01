import filtersReducer from '../../reducers/filters'
import moment from 'moment'
import expenses from '../fixtures/expenses'
import { expect } from '@jest/globals'

test('Should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test('Should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
  expect(state.sortBy).toBe('amount')
})

test('Should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  }
  const action = { type: 'SORT_BY_DATE'}
  const state = filtersReducer(currentState, action)
  expect(state.sortBy).toBe('date')
})

test('Should set text filter', () => {
  const text = 'This is my filter'
  const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text })
  expect(state.text).toBe('This is my filter')
})

test('Should set startDate filter', () => {
  const startDate = moment(0).add(2, 'days').valueOf()
  const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate})
  expect(state.startDate).toEqual(startDate)
}) 

test('Should set endDate filter', () => {
  const endDate = moment(0).add(4, 'days').valueOf()
  const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate })
  expect(state.endDate).toEqual(endDate) 
})