import {createStore, combineReducers} from 'redux'
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'

//CREATE STORE
//combine reducers take an Object as an argument

//FUNC that will return the store
export default () => {
	
const store = createStore(
	combineReducers({
		expenses:expensesReducer,
		filters: filtersReducer
	}),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

return store;
}