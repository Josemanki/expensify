import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, altFilters } from '../fixtures/filters'
import moment from 'moment'

let setTextFilter, sortByDate, sortByAmount, setEndDate, setStartDate, wrapper

beforeEach(() => {
  setTextFilter = jest.fn()
  sortByDate = jest.fn()
  sortByAmount = jest.fn()
  setStartDate = jest.fn()
  setEndDate = jest.fn()
  wrapper = shallow(
  <ExpenseListFilters
    filters={filters}
    setTextFilter={setTextFilter}
    sortByDate={sortByDate}
    sortByAmount={sortByAmount}
    setStartDate={setStartDate}
    setEndDate={setEndDate}
   />)
})

test('Should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('Should render ExpenseListFilters with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters
  })
  expect(wrapper).toMatchSnapshot()
})

test('Should handle text change', () => {
  wrapper.find('input').simulate('change', {
    target: {
      value: filters.text
    }
  })
  expect(setTextFilter).toHaveBeenLastCalledWith(filters.text)
}) 

test('Should handle sort by date change', () => {
  wrapper.setProps({
    filters: altFilters
  })
  wrapper.find('select').simulate('change', {
    target: {
      value: filters.sortBy
    }
  })
  expect(sortByDate).toHaveBeenCalled()
})

test('Should handle sort by amount change', () => {
  wrapper.find('select').simulate('change', {
    target: {
      value: altFilters.sortBy
    }
  })
  expect(sortByAmount).toHaveBeenCalled()
})

test('Should handle date changes', () => {
  const startDate = moment(0).add(4, 'years')
  const endDate = moment(0).add(8, 'years')
  wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate, endDate})
  expect(setStartDate).toHaveBeenLastCalledWith(startDate)
  expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

test('Should handle date focus changes', () => {
  const calendarFocused = 'endDate'
  wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')({calendarFocused})
  expect(wrapper.state('calendarFocused')).toEqual({calendarFocused})
})