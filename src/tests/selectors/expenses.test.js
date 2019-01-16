import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import  expenses  from  '../fixtures/expenses'

//test filters by text value
test('should filter by text value',()=>{
const filters = {
	sortBy:'amount',
	startDate: 0,
	endDate: 0,
	text: 'g'
}

const result = selectExpenses(expenses, filters)
expect(result).toEqual([expenses[2], expenses[1]])
})

//WILL CONTINUE TOMORROW HEW====================================


//test filters by start date
test('should filter by startDate',()=>{
	const filters = {
		text: '',
		sortBy: 'date',
		startDate: moment(0),
		endDate: undefined
	}

const result = selectExpenses(expenses,filters)	

expect(result).toEqual([expenses[0],expenses[1]])

})

//Should filter by endDate
test('should filter endDate',()=>{
const filters = {
	text:'',
	sortBy:'amount',
	startDate: undefined,
	endDate:moment(0)
}
const result = selectExpenses(expenses,filters)
expect(result).toEqual([expenses[2],expenses[1]])

})

//should sort by date
test('should short by date',()=>{
	const filters = {
		text:'',
		startDate:undefined,
		endDate: undefined,
		sortBy: 'date'
	}

const result = selectExpenses(expenses,filters)
expect(result).toEqual([expenses[0],expenses[1],expenses[2]])

})



//should sort by amount
test('should short by amount',()=>{
	const filters = {
		text:'',
		startDate:undefined,
		endDate: undefined,
		sortBy: 'amount'
	}

const result = selectExpenses(expenses,filters)
expect(result).toEqual([expenses[2],expenses[0],expenses[1]])

})
