import React from 'react'
import LoggedInLinks from './LoggedInLinks'
import LoggedOutLinks from './LoggedOutLinks'




class NavBar extends React.Component{
	render(){
		return(
			<nav>
    			<div className="nav-wrapper">
      				<a href="#!" className="brand-logo center">Doxx Manager's App</a>
      				<LoggedInLinks />
      				<LoggedOutLinks />
    			</div>
  			</nav>
		)
	}
}


export default NavBar