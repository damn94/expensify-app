import { shallow } from 'enzyme';
import React from 'react';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage'

//TEST for ExpenseDashboardPage
test('Should render the ExpenseDashboardPage component',()=>{
	const wrapper = shallow(<ExpenseDashboardPage />)
	expect(wrapper).toMatchSnapshot();

})