import {addExpense} from '../actions/expenses'
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import React from 'react';


//convert component ADDEXPENSEDASHBORDPAGE to class  
export class AddExpensePage extends React.Component{

addExpense = (expense)=> {
		this.props.addExpense(expense)
		this.props.history.push('/')
	} 

render(){

return(
		<div>
			<ExpenseForm onSubmit={this.addExpense}/>
		</div>
	)}
}





// //COMPONENT ADDEXPENSEDASHBORDPAGE
// const AddExpensePage = (props) => (
// 	<div>
// 		<ExpenseForm onSubmit={
// 		//grap the input from the browser => store
// 		//add Expense
// 			(data)=> {
// 				//props.dispatch(addExpense(data))
// 				props.onSubmit(data)
// 				props.history.push('/')
// 			}
// 		}/>
// 	</div>
// )

//the second argument for props
const mapDispatchToProps = (dispatch) => ({
	addExpense: (expense) => dispatch(addExpense(expense))
})

export default connect(undefined,mapDispatchToProps)(AddExpensePage);