import {Link} from 'react-router-dom'
import  React from 'react';

export const ExpenseListItem = ({description , amount, createdAt,id }) => (
	<div>
		<h3>
			<Link to={`/edit/${id}`}>
				{description}
			</Link>
		</h3>

		<p>{amount} -- {createdAt}</p>
	</div>
)


export default ExpenseListItem;