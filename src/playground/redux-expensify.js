console.log('redux-expensify-v1');

//grap two named function createStore  combinedReducers
import {createStore,combineReducers} from 'redux';
import uuid from 'uuid'

//ADD_EXPENSE
const addExpense = (
{
	description='',
	amount=0,
	createdAt=0,
	note=''
}={}
) => ({
type: 'ADD_EXPENSE',
expense:{
	id: uuid(),
	description: description,
	amount:amount,
	createdAt: createdAt,
	note: note
		
	}
})

//REMOVE_EXPENSE
const removeExpense = ({id}={}) =>({ type: 'REMOVE_EXPENSE', id });

//EDIT_EXPENSE
const editExpense = (id,updates) =>({ type: 'EDIT_EXPENSE', id,updates })
	


//SET_TEXT_FILTER
const setTextFilter = (setText='') => ({ type: 'SET_TEXT_FILTER', setText })

//SORT_BY_DATE
const sortByDate = () =>({ type: 'SORT_BY_DATE'	})

//SORT_BY_AMOUNT
const sortByAmount = () =>({ type: 'SORT_BY_AMOUNT'	})

// SET_START_DATE
const setStartDate = (startDate) =>({ type:'SET_START_DATE', startDate})

// SET_END_DATE
const setEndDate = (endDate) => ({ type: 'SET_END_DATE',endDate })

//CREATE TWO REDUCERS INDIVIDUALY

//defaulvalue state expense reducer
const expenseReducerDefaultState = [] ;

//EXPENSE REDUCER
const expensesReducer = (state=expenseReducerDefaultState,action) =>{
switch(action.type){
	//CASE ADD_EXPENSE
	case 'ADD_EXPENSE':
		return [
			...state,
			action.expense
		];
	//CASE REMOVE_EXPENSE
	case 'REMOVE_EXPENSE':
	 return state.filter((expense)=> expense.id !== action.id);

	 //CASE EDIT_EXPENSE
	case 'EDIT_EXPENSE':
		return state.map((expense) =>{
			if(expense.id === action.id){
				return {...expense,...action.updates}
			}else{
				return expense;
			}
		}) 

	 //DEFAULT
	default:
		return state
	};

}

//default state for filters reducer
const filtersReducerDefaultState = {
	text: 'rent',
	sortBy: 'amount',
	startDate: undefined,
	endDate: undefined
}


//FILTER REDUCER
const filtersReducer = (state=filtersReducerDefaultState,action) =>{
switch (action.type){
	//CASE TEXT FILTERS
	case 'SET_TEXT_FILTER':
		return {
			...state,
			text: action.setText
		};
	//CASE SORT BY DATE
	case 'SORT_BY_DATE':
		return {
			...state,
			sortBy:'date'
		};
	case 'SORT_BY_AMOUNT':
		return {
			...state,
			sortBy:'amount'
		};
	case 'SET_START_DATE':
		return {
			...state,
			startDate: action.startDate
		};
	case 'SET_END_DATE':
		return {...state,
			endDate: action.endDate}
	default :
		return state;
	}
}

//CREATE STORE
//combine reducers take an Object as an argument
const store = createStore(
	combineReducers({
		expenses:expensesReducer,
		filters: filtersReducer
	})
)

//create a function that can filter store
const getVisibleExpenses =	(expenses, {text,sortBy,endDate,startDate}) =>{

return expenses.filter((expense)=>{
	const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
	const endDateMatch = typeof endDate !== 'number' ||   expense.createdAt <= endDate;
	const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

	return startDateMatch && endDateMatch && textMatch
	}).sort((a,b)=>{
//SORTING THE ARRAY
		if (sortBy === 'date'){
			//SORTING BY DATE

			return a.createdAt > b.createdAt ? -1 : 1
		}else if (sortBy === 'amount') {
			
			//SORTING BY AMOUNT
			return a.amount > b.amount ? -1 : 1
		}
	})
}

//watch the change in the store
// store.subscribe(()=>{
// 	const state = store.getState()
// 	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// 	console.log(visibleExpenses);
// })



//Overview state look like
const demoState = {
	expenses:[{
		id:'edj243994-korei-asfmd',
		description:'Achat du mois',
		note:'',
		amount: 30000,
		createdAt:0
	}],

	filters:{
		text: 'rent',
		sortBy: 'amount',
		startDate: undefined,
		endDate: undefined
	}
}

//ADD EXPENSE TO THE STORE
const expenseOne = store.dispatch(addExpense({
		description: 'Banane',
		amount:300,
		createdAt: -3,
		note: ''
	}))

const expenseTwo = store.dispatch(addExpense({
		description: 'Coffe',
		amount:100,
		createdAt: 10,
		note: ''
	}))
const expenseThree = store.dispatch(addExpense({
		description: 'burger',
		amount:100,
		createdAt: 3,
		note: ''
	}))

//REMOVE EXPENSE TO THE STORE
// console.log('expenseID', expenseOne.id)
// store.dispatch(removeExpense({id: expenseOne.expense.id}))


//SEND ACTION EDIT AN EXPENSE
// store.dispatch(editExpense(expenseOne.expense.id, {
// 	description: 'Ice Cream',
// 	amount: 1200
// }))

//send actions sorby text,date,amount


store.dispatch(setTextFilter(''));
// store.dispatch(setStartDate(-100))
// store.dispatch(sortByDate())

store.dispatch(sortByAmount())
// store.dispatch(setEndDate(3))
// store.dispatch(setEndDate(-1354))

//THE STORE, VISIBLE EXPENSES
const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);