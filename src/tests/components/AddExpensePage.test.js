import {AddExpensePage} from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses'
import {shallow} from 'enzyme'
import React from 'react';

let addExpense, history,wrapper

beforeEach(()=>{
addExpense = jest.fn()
history = { push: jest.fn() }	
wrapper = shallow(<AddExpensePage  addExpense={addExpense} history={history}/>)

})
//test for add expense
test('should render add expense correctly',()=>{
	expect(wrapper).toMatchSnapshot();
})

//test should handle on submit
test('should handle on submit',()=>{

wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])

expect(history.push).toHaveBeenLastCalledWith('/')
expect(addExpense).toHaveBeenLastCalledWith(expenses[2])

})