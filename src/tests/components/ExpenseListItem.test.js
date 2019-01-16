import { ExpenseListItem } from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';
import {shallow} from 'enzyme';
import React from 'react';

//test ExpenseListItem
test('should render ExpenseListItem with expenses',()=>{
	const wrapper = shallow(<ExpenseListItem {...expenses[1]}/>)
	expect(wrapper).toMatchSnapshot()
})


// test('should render ExpenseListItem item correctly snapshot',()=>{

// 	const wrapper = shallow(<ExpenseListItem {...expenses[1]}/>);
// 	expect(wrapper).toMatchSnapshot();

// })