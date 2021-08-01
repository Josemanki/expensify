import React from 'react'
import { shallow } from 'enzyme'
import ExpenseListItem from '../../components/ExpenseListItem'
import expenses from '../fixtures/expenses'
import { expect } from '@jest/globals'

test('Should render an ExpenseListItem', () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>) 
  expect(wrapper).toMatchSnapshot() 
}) 