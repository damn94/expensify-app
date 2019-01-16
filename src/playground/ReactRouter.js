import React from 'react';
import {Route,BrowserRouter,Switch,Link,NavLink} from 'react-router-dom';


//COMPONENT EXPENSEDASHBORDPAGE
const ExpenseDashboardPage = () => (
	<div>
		<p>This is the dashboardpage!</p>
	</div>
)

//COMPONENT EDITEXPENSEDASHBORDPAGE
const EditExpensePage = () => (
	<div>
		<p>This is the edit expense page </p>
	</div>
)

//COMPONENT ADDEXPENSEDASHBORDPAGE
const addExpensePage = () => (
	<div>
		<h1>This is the add expense page</h1>
	</div>
)

//COMPONENT HELPAGE
const HelpPage = () => (
	<div>
		<h1>This is the help page </h1>
	</div>
)

//COMPONENT NOTFOUND
const NotFound = () => (
	<div>
		<h1>404 - <Link to='/'>go home</Link></h1>
	</div>
)

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
	<button>
		<NavLink to='/edit' activeClassName='is-active'>Edit Expense</NavLink>
	</button>
	<button>
		<NavLink to='/help' activeClassName='is-active'>Help</NavLink>
	</button>
</div>
)



//APP ROUTES
const AppRouter	= () =>( 
	//KEEP SYNC UI AND URL
<BrowserRouter>
	<div>
	<Header />
		{/*Switch between routes and render the matched one and stop*/}
		<Switch>
		 {/*ROUTE TO CHOOSE ROUTES*/}
			<Route path='/' component={ExpenseDashboardPage} exact/>
			<Route path='/create' component={addExpensePage} />
			<Route path='/edit' component={EditExpensePage} />
			<Route path='/help' component={HelpPage} />
			<Route component={NotFound} />
		</Switch>
	</div>
</BrowserRouter>
);

export default AppRouter;