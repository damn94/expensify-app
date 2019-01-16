import {
	setStartDate, 
	setEndDate,
	sortByAmount,
	sortByDate,
	setTextFilter} from '../../actions/filters';

import moment from 'moment';

//test filters for start date
test('should generate set start date action object',()=>{
	const action = setStartDate(moment(0));
	expect(action).toEqual({
		type: 'SET_START_DATE',
		startDate: moment(0)
	})
})


//test filters for endDate
test('should generate end date action object',()=>{
	const action = setEndDate(moment(0))
	expect(action).toEqual({
		type: 'SET_END_DATE',
		endDate:moment(0)
	})
})

//test for sortByAmount
test('should generate sort By Amount action object',()=>{
	expect(sortByAmount()).toEqual({type:'SORT_BY_AMOUNT'})
})

//test for sortByDate
test('should generate sort by date action object',()=>{
	expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE'})
})


//test for text filter part 1
test('should setup text filter action object',()=>{
	const setText ='Ice cream'
	const action = setTextFilter(setText)
	expect(action).toEqual({
		type:'SET_TEXT_FILTER',
		setText
	})
})

//test for text filter part 2 case no argument
test('should setup text filter action object',()=>{
const action = setTextFilter();

expect(action).toEqual({
		type:'SET_TEXT_FILTER',
		setText: ''
	})
})
