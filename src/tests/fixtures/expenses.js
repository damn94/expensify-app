import moment from 'moment';

//test data
export default [
{
	id:'1',
	description: 'Tea',
	note:'',
	amount: 73,
	createdAt:moment(0).add(4,'days').valueOf()
},{
	id:'2',
	description: 'Glass',
	note:'',
	amount: 0.73,
	createdAt:0
},{
	id:'3',
	description: 'Sugar',
	note:'',
	amount: 297,
	createdAt:moment(0).subtract(4, 'days').valueOf()
}
]