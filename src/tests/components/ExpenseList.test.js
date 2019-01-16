import { ExpenseList } from '../../components/ExpenseList'
import expenses from '../fixtures/expenses'
import {shallow} from 'enzyme'
import React from 'react';


//test the not connected version of  ExpenseList
test('Should render ExpenseList with expenses',()=>{

	const wrapper = shallow(<ExpenseList expenses={expenses}/>)
	
	expect(wrapper).toMatchSnapshot()
})

//case expenses.length = 0

test('Should render ExpenseList with empty message',()=>{
	const wrapper = shallow(<ExpenseList expenses={[]} />)
	expect(wrapper).toMatchSnapshot()

})