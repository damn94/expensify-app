

//defaulvalue state expense reducer
const expenseReducerDefaultState = [] ;

//EXPENSE REDUCER
export default (state=expenseReducerDefaultState,action) =>{
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