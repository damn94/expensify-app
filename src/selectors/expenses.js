import moment from 'moment';

//create a function that can filter store
export default (expenses, {text,sortBy,endDate,startDate}) =>{

return expenses.filter((expense)=>{
	const createdAtMoment =	moment(expense.createdAt)
	const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment,'day'):true;
	const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment,'day') : true;
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
