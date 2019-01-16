import moment from 'moment';

//default state for filters reducer
const filtersReducerDefaultState = {
	text: '',
	sortBy: 'amount',
	startDate: moment().startOf('month'),
	endDate: moment().endOf('month')
}


//FILTER REDUCER
export default (state=filtersReducerDefaultState,action) =>{
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
