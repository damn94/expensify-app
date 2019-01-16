import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'

//test for expenses reducers default
test('Should set default state',()=>{
	const state = expensesReducer(undefined,{type:'@@INIT'})
	expect(state).toEqual([]);
})

//test remove expense if Id found;
test('Should remove expense by an Id',()=>{

const action = {
	type: 'REMOVE_EXPENSE',
	id: expenses[2].id
}
const state = expensesReducer(expenses,action)
expect(state).toEqual([expenses[0],expenses[1]])

})

//test remove expense  if not id found
test('Should not remove expenses if !id ',()=>{
	const action = {
		type: 'REMOVE_EXPENSE',
		id: 'noId'
	}

const state = expensesReducer(expenses, action)
expect(state).toEqual(expenses)

})

//test for add expense 
test('Should add an expense',()=>{
	const expense = {description: 'coffee', amount: 13}
	const action = {
		type:'ADD_EXPENSE',
		expense
	}

	const state = expensesReducer(expenses, action)
	expect(state).toEqual([...expenses, expense])
})

//test for edit expense case id found
test('Should edit an expense',()=>{
const amount = 100462

const action = {
	type:'EDIT_EXPENSE',
	id: expenses[0].id,
	updates:{
		amount
	}
}
const state = expensesReducer(expenses,action)
expect(state[0].amount).toBe(amount)
})

//test for edit expense case id not found
test('Should not updates expense',()=>{
const description = 'Patate';
	
const action = {
		type: 'EDIT_EXPENSE',
		id: 'noId',
		updates: {
			description
		}
	}

const state = expensesReducer(expenses,action)
expect(state).toEqual(expenses)

})