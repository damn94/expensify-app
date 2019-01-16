import React from 'react';
import {NavLink, Link} from 'react-router-dom'


//HEADER COMPONENT
const Header = () => (
<div>
		<h1>Expensify</h1>
	{/*button links using NavLink*/}
	<button>
		<NavLink to='/' activeClassName='is-active' exact>Home</NavLink>
	</button>
	<button>
		<NavLink to='/create' activeClassName='is-active'>Add Expense</NavLink>
	</button>
{/*	<button>
		<NavLink to='/edit' activeClassName='is-active'>Edit Expense</NavLink>
	</button>*/}
	<button>
		<NavLink to='/help' activeClassName='is-active'>Help</NavLink>
	</button>
</div>
)


export default Header;