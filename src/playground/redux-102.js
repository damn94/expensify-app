console.log('redux-102');

//import redux
import {createStore} from 'redux';

//increment generator
const increment = ({incrementBy=1}={}) =>({
	type:'INCREMENT',
	incrementBy

})

//decrement generator
const decrement = ({decrementBy=1}={}) =>({
	type:'DECREMENT',
	decrementBy
})

//reset generator
const reset = () => ({
	type:'RESET'
})

//set generator
const set = (setState=102) =>({
	type:'SET',
	setState
})

//Reducers
//1. they are pure function;
//2. never change  state or action;
const countReducers = (state={count:0},action)=>{
switch(action.type){

	case 'INCREMENT':
		return {
			count: state.count + action.incrementBy
		};

	case 'DECREMENT':
		return {
			count: state.count - action.decrementBy
		};

	case 'RESET':
		return {
			count: 0
		};

	case 'SET':
		return {
			count: action.setState
		};

default:
	return state
	}
}

//You can  call createStore without an argument
// but it's  expect the  first  argument to start with a function
//Create a store
const store = createStore(countReducers)
//==========================

//watch changes in the store  
store.subscribe(()=>{
console.log(store.getState())
	
})
//the return value of subscribe
// unSubscribe()
//==========================

//Actions is an object that get sent to the store by using dispatch

//I'd like to Increment
store.dispatch(increment())
store.dispatch(increment({incrementBy: 10}))

//I'd like to reset
store.dispatch(reset())

//I'd like to decrement
store.dispatch(decrement())
store.dispatch(decrement({decrementBy: 25}))

//I'd like to set value for 
store.dispatch(set())
