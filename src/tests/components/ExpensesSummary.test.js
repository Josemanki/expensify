import {ExpensesSummary} from '../../components/ExpensesSummary'
import { shallow } from 'enzyme'
import React from 'react'

let getSummary

test('Should render expenses with 1 expense correctly', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={123} />)
  expect(wrapper).toMatchSnapshot()
})

test('Should render expenses with 1 expense correctly', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={123123123123} />)
  expect(wrapper).toMatchSnapshot()
}) 