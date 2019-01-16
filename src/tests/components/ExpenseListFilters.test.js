import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters, altFilters} from '../fixtures/filters';
import {shallow} from 'enzyme';
import moment from 'moment';
import React from 'react';


let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(()=>{
	setTextFilter = jest.fn();
	sortByDate = jest.fn();
	sortByAmount = jest.fn();
	setStartDate = jest.fn();
	setEndDate = jest.fn();
	wrapper = shallow(
		<ExpenseListFilters 
		filters={filters}
		setTextFilter={setTextFilter}
		sortByDate={sortByDate}
		sortByAmount={sortByAmount}
		setStartDate={setStartDate}
		setEndDate={setEndDate}
		/>
	)
})


//should render expenseList correctly
test('should render ExpenseList correctly',()=>{
	expect(wrapper).toMatchSnapshot()
})

//should render expenseList correctly with-data
test('should render expenseList correctly with-data',()=>{

wrapper.setProps({
	filters: altFilters
})
expect(wrapper).toMatchSnapshot();
})


//should handle text change
test('should handle text change',()=>{
	const value = 'ice'
	wrapper.find('input').simulate('change',{
		target: {value}
	})
	expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

//should sortBy date
test('should sortBy date',()=>{
	const value = 'date';
	wrapper.find('select').simulate('change',{
		target:{value}
	})
	expect(sortByDate).toHaveBeenCalled()
})


//should sortBy Amount
test('should sortBy amount',()=>{
const value = 'amount';
wrapper.find('select').simulate('change',{
		target:{value}
	})
	expect(sortByAmount).toHaveBeenCalled()
})


//should handle date change
test('should handle date change',()=>{
const startDate = moment(0)
const endDate = moment(0).add(8,'years')
wrapper.find('DateRangePicker').prop('onDatesChange')({startDate,endDate})
expect(setStartDate).toHaveBeenLastCalledWith(startDate)
expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})


//should handle date focus
test('should handle date focus',()=>{
	const focusedInput = 'endDate'
	wrapper.find('DateRangePicker').prop('onFocusChange')(focusedInput)
	expect(wrapper.state('calendarFocused')).toEqual(focusedInput)
})