console.log('higher order componenet (HOC)')
import ReactDOM from 'react-dom';
import React from 'react';

//regular component
const Hello = (props) => (
	<div>
		{
		props.isAuth ? (
				<h1>You've access to private chat</h1>
			):(
				<h1>login first</h1>
			)
		}
	</div>
)

//The higher order component
const isAdmin =(WrappedComponent)=>{


	return (props)=>(
		<div>
		{console.log('the higher',props)}
			<WrappedComponent {...props}/>
		</div>
	)
}
const Admin = isAdmin(Hello)


ReactDOM.render(<Admin isAuth={false}/>,document.getElementById('root'));