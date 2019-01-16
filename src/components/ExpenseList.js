import { connect } from 'react-redux';
import React from 'react';
import ExpenseListItem from './ExpenseListItem'
import selectorsExpense from '../selectors/expenses'

export const ExpenseList = (props) =>(
	<div>
	{

	props.expenses.length === 0 ?(
			<h1>No expenses</h1>
		):(
		props.expenses.map((expense)=>{
			return <ExpenseListItem key={expense.id}{...expense}/>
		})

		)
	}
	</div>
)
const mapStateToProps = (state) =>{
	return {
		expenses: selectorsExpense(state.expenses,state.filters)
	}
}

export default connect(mapStateToProps)(ExpenseList);