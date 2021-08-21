import { shallow } from 'enzyme'
import React from 'react'
import LoadingPage from '../../components/LoadingPage'

test('Should render Loading Page', () => {
  const wrapper = shallow(<LoadingPage />)
  expect(wrapper).toMatchSnapshot()
})