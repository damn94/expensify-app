import {editExpense,removeExpense} from '../actions/expenses'
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import React from 'react';


//refactoring component to class
export class EditExpensePage extends React.Component {

removeExpense =()=> {

	this.props.removeExpense({id: this.props.expense.id})
	this.props.history.push('/')
}
editExpense = (expense)=>{
	this.props.editExpense(this.props.expense.id,expense)
	this.props.history.push('/')
}

render(){
	return(
		<div>
			<ExpenseForm expense={this.props.expense} onSubmit={this.editExpense}/>

			{/*remove button*/}
			<button onClick={this.removeExpense}>Remove</button>
			
		</div>	
	)		
	}
}




//COMPONENT EDITEXPENSEDASHBORDPAGE
// const EditExpensePage = (props) =>{
// return(
// 		<div>
// 			<ExpenseForm {...props} onSubmit={(expense)=>{
// 				props.dispatch(editExpense(props.match.params.id,expense))
// 				props.history.push('/')
// 			}}/>

// 			{/*remove button*/}
// 			<button onClick={()=>{
// 				props.dispatch(removeExpense({id: props.expense.id}))
// 				props.history.push('/')
// 			}}>Remove</button>
			
// 		</div>
// 	)
// }

const mapDispatchToProps = (dispatch, props) =>( {
	editExpense: (id,expense) => dispatch(removeExpense(id, expense)),
	removeExpense: (data)=> dispatch(removeExpense(data))
})


const mapStateToProps = (state,props) =>{
	return {
		expense: state.expenses.find((expense)=>expense.id === props.match.params.id
	)}
}

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);