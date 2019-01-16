import getVisibleExpenses from './selectors/expenses';
import configureStore from './store/configureStore';
import {setTextFilter} from './actions/filters';
import {addExpense} from './actions/expenses';
import {Provider, connect} from 'react-redux';
import 'react-dates/lib/css/_datepicker.css';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import ReactDOM from 'react-dom';
import './style/style.scss';
import React from 'react';


//THE STORE
const store = configureStore()


//WATCH CHANGE IN THE STORE
// store.subscribe(()=>{
// console.log(store.getState())	
// })

//action add expense
store.dispatch(addExpense({description:'Coffee', amount: 120}))
store.dispatch(addExpense({description:'Ice cream', amount: 300,createdAt: 1494599910589}))

//SET TEXT FILTERS TO STR
// store.dispatch(setTextFilter(''))

//SET TIMEOUT ASYN
// setTimeout(()=>{
	
// 	store.dispatch(setTextFilter('ice'))
// 	setTimeout(()=>{
// 		store.dispatch(setTextFilter(''))

// 	},3000)
// }, 3000)


//get the state
const state = store.getState()
const visibleExpense = getVisibleExpenses(state.expenses,state.filters)

// console.log(visibleExpense)
const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
)


ReactDOM.render(jsx, document.getElementById('root'))