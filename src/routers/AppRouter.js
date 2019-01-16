//IMPORT MODULES
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import {Route,BrowserRouter,Switch} from 'react-router-dom';
import EditExpensePage from '../components/EditExpensePage';
import AddExpensePage from '../components/AddExpensePage';
import HelpPage  from '../components/HelpPage';
import NotFound from '../components/NotFound';
import Header from '../components/Header';
import React from 'react';


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
			<Route path='/create' component={AddExpensePage} />
			<Route path='/edit' component={EditExpensePage} exact/>
			<Route path='/edit/:id' component={EditExpensePage} />
			<Route path='/help' component={HelpPage} />
			<Route component={NotFound} />
		</Switch>
	</div>
</BrowserRouter>
);

export default AppRouter;