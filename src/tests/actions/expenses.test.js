import { editExpense, removeExpense, addExpense } from '../../actions/expenses';

//test for removeExpense
test('should setup remove expense action object',()=>{
	const action = removeExpense({id: 'abc123'})
//(obj){} === {}(obj) always false should use toEqual not toBe
	expect(action).toEqual({
		type:'REMOVE_EXPENSE',
		id: 'abc123'
	})
})

//test for editExpense case
test('should setup edit expense action object',()=>{
	const action = editExpense('abcd123',{note:'new note'})
	expect(action).toEqual({
		type:'EDIT_EXPENSE',
		id: 'abcd123',
		updates:{
			note: 'new note'	
		} 
	})
})

//test for addExpense part 1
test('should setup add expense action object',()=>{
	const expenseAction = {
		description: 'Coffee',
		note: 'note Coffee for this morning',
		amount: 3,
		createdAt: 10003
	}
const action = addExpense(expenseAction)

	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense:{
			... expenseAction,
			id: expect.any(String)
		}

	})
})


//Test addExpense part 2 case default
test('should setup add expense action object (default)',()=>{
	const action = addExpense()
	
expect(action).toEqual({
	type:'ADD_EXPENSE',
	expense:{
		description:'',
		amount:0,
		note: '',
		createdAt:0,
		id: expect.any(String)}
	})

})

