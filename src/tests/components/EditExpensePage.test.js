import {EditExpensePage} from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'
import {shallow} from 'enzyme'
import React from 'react'

let wrapper, history,match,removeExpense, editExpense;
beforeEach(()=>{
removeExpense = jest.fn()
history = {push: jest.fn()}
editExpense = jest.fn()
// match = {
// 	params:{
// 		id: jest.fn()
// 	}
// }

wrapper = shallow(<EditExpensePage 
	removeExpense={removeExpense} 
	// match={match}
	history={history} 
	editExpense={editExpense}
	expense={expenses[0]}
	/>)
})

	
//should render editExpense correctly
test('should render editExpense correctly',()=>{
	expect(wrapper).toMatchSnapshot()
})

// should render editExpense with spies
test('should render editExpense with spies',()=>{

	
	wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
	expect(history.push).toHaveBeenLastCalledWith('/')
	expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0])
})

//should handle removed expense
test('should handle removed expense',()=>{
	wrapper.find('button').simulate('click')
	expect(removeExpense).toHaveBeenLastCalledWith({id:expenses[0].id})
	expect(history.push).toHaveBeenLastCalledWith('/')
})
