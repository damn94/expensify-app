//single date picker
import {SingleDatePicker} from 'react-dates'
import moment from 'moment';
import React from "react";

class ExpenseForm extends React.Component {
//to change props constructor function
constructor(props){
	super(props);
	this.state = {
 		description:props.expense ? props.expense.description: '',
 		note: props.expense ? props.expense.note : '',
 		amount:props.expense ? (props.expense.amount /100).toString() : '',
 		createdAt: props.expense ? moment(props.expense.createdAt): moment(),
 		calendarFocus: false,
 		error: undefined
	}
}



//on description change function
onDescriptionChange = (e) => {
	const description = e.target.value
	this.setState(()=>({description}))
}
	

//on note change function
onNoteChange = (e) => {
	const note = e.target.value
	this.setState(()=>({note}))
}

//on amount change's function
onAmountChange = (e) => {
const amount = e.target.value
if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
		this.setState(()=>({amount}))
	}
}

//on date change for component SingleDatePicker
onDateChange = (createdAt) =>{
	if (createdAt) {
		this.setState(()=>({createdAt}))
	}
}


//ON FOCUS CHANGE
onFocusChange = ({focused}) => {
	this.setState(()=>({calendarFocus: focused}))
}


//ON SUBMIT CHANGE
onSubmitChange = (e) => {
	e.preventDefault()
	if (!this.state.amount || !this.state.description){
		const error = 'Please,provide description and  amount.'
		this.setState(()=>({error}))
	}else{
		this.setState(()=> ({error: ''}))
			//function send data to AddExpensePage Component
			this.props.onSubmit({
			description: this.state.description,
			createdAt: this.state.createdAt.valueOf(),
			note: this.state.note,
			amount: parseFloat(this.state.amount, 10) * 100
		})
	}

}

render(){
	return (
		<div>

			{this.state.error && <h4>{this.state.error}</h4>}
			{/*keep track input field change*/}

			{/*description filed*/}
		<form onSubmit={this.onSubmitChange}>
			<input 
			type='text' 
			placeholder='description' 
			value={this.state.description} 
			autoFocus
			onChange={this.onDescriptionChange}
			/>
			
			{/*amount field*/}
			<input	 
			type='text' 
			value={this.state.amount} 
			placeholder='amount' 
			onChange={this.onAmountChange}
			/>

			<SingleDatePicker 
			date={this.state.createdAt}
			onDateChange={this.onDateChange}
			focused={this.state.calendarFocus}
			onFocusChange={this.onFocusChange}
			numberOfMonths={1}
			isOutsideRange={()=> false}
			/>
			
			{/*note field*/}
			<textarea 
			placeholder='Add your expense note here! (optional)'
			value={this.state.note}
			onChange={this.onNoteChange}
			/>

			<button>Add Expense</button>
		</form>
		</div>
		)
	}
}


export default ExpenseForm;