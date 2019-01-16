import filtersReducer from '../../reducers/filters'
import moment from 'moment';


//test reducers filter by default
test('Should setup default filter value',()=>{
	const state = filtersReducer(undefined,{ type: '@@INIT'})
	
	expect(state).toEqual({
	text: '',
	sortBy: 'amount',
	startDate: moment().startOf('month'),
	endDate: moment().endOf('month')
})
})

//test reducers filter by Amount
test('Should set sortBy by Amount',()=>{
	const state = filtersReducer(undefined,{type:'SORT_BY_AMOUNT'})
	expect(state.sortBy).toBe('amount')
})

//test reducers filter by dates
test('should set sortBy by dates',()=>{
const currentState = {
	startDate: undefined,
	endDate: undefined,
	text: '',
	sortBy:'amount'
}

const action = {type:'SORT_BY_DATE'}
const state = filtersReducer(currentState, action)

expect(state.sortBy).toBe('date')

})

//set Text filter
test('Should set text filter',()=>{
const action = {
	type: 'SET_TEXT_FILTER',
	setText: 'coffe'
}

const state = filtersReducer(undefined,action)
expect(state.text).toBe('coffe')

})

//should set Start date filter
test('Should set start date filter',()=>{
const startDate = moment(0).startOf('month');

const action = {
	type:'SET_START_DATE',
	startDate
}

const state = filtersReducer(undefined,action)
expect(state.startDate).toEqual(startDate)

})


//shoul set end date
test('Should set start date filter',()=>{
const  endDate = moment(-1000).startOf('month') 
const action = {
	type:'SET_END_DATE',
	endDate
}

const state = filtersReducer(undefined,action)
expect(state.endDate).toEqual(endDate)

})














