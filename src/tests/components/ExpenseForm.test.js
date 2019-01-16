import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses'
import {shallow} from 'enzyme';
import moment from 'moment'
import React from 'react';

//test for expenseForm
test('should render ExpenseForm component',()=>{
const wrapper = shallow(<ExpenseForm />);
expect(wrapper).toMatchSnapshot();

})

//test for expense form with data
test('should render expense form with data',()=>{
	const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>)
	expect(wrapper).toMatchSnapshot();

})

//test should render error with submission
test('Should render error with submission',()=>{
const wrapper = shallow(<ExpenseForm />)
expect(wrapper).toMatchSnapshot()
	wrapper.find('form').simulate('submit',{
		preventDefault: ()=>{}
	});

expect(wrapper.state('error').length).toBeGreaterThan(0)
expect(wrapper).toMatchSnapshot()
})


//test for description state
test('Should set description on input change',()=>{
	const value = 'new description'
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('input').at(0).simulate('change',{
		target: {value }
	})
	expect(wrapper.state('description')).toBe(value)

})

//test for note change
test('should set note on input change',()=>{

const value = 'new note';
const wrapper = shallow(<ExpenseForm />);

wrapper.find('textarea').simulate('change',{
	target:{value}
});
expect(wrapper.state('note')).toBe(value);

})


//should set amount if valide
test('should set amount if valide',()=>{
	const value = '22.30'
	const wrapper = shallow(<ExpenseForm />)
	wrapper.find('input').at(1).simulate('change',{
		target: {value}
	})
	expect(wrapper.state('amount')).toBe(value);
})

//should not set amount if in valid input
test('should not set amount if invalid input',()=>{
	const value = '22.300'
	const wrapper = shallow(<ExpenseForm />)
	wrapper.find('input').at(1).simulate('change',{
		target: {value}
	})
	expect(wrapper.state('amount')).toBe('');
})

//test submission with data
test('should call onSubmit prop for valid form submission',()=>{
	const onSubmitSpy = jest.fn();
	const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>)
	wrapper.find('form').simulate('submit',{
		preventDefault: ()=>{}
	})
	expect(wrapper.state('error')).toBe('')
	expect(onSubmitSpy).toHaveBeenLastCalledWith({
		note: expenses[0].note,
		description: expenses[0].description,
		amount: expenses[0].amount,
		createdAt: expenses[0].createdAt
	})
})

//test single Date picker onDateChange
test('should set new date on date change',()=>{
	const now = moment()
	const wrapper = shallow(<ExpenseForm />)
	wrapper.find('SingleDatePicker').prop('onDateChange')(now)
	expect(wrapper.state('createdAt')).toEqual(now)

})


//test for calendar focuse
test('should set calendar on Focus change',()=>{
	const wrapper = shallow(<ExpenseForm />)
	wrapper.find('SingleDatePicker').prop('onFocusChange')({focused: true})
	expect(wrapper.state('calendarFocus')).toEqual(true)

})





