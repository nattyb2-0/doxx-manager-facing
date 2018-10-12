import React from 'react'
import LoggedInLinks from './LoggedInLinks'
import LoggedOutLinks from './LoggedOutLinks'
import {connect} from 'react-redux'



const NavBar = (props)=>{
	const link = props && props.nav.loggedIn ? (<LoggedInLinks />) : (<LoggedOutLinks />)
		return(
			<nav>
    			<div className="nav-wrapper black navigation">
      				<a href="#!" className="brand-logo red-text">ONBD DOXX</a>
      				{link}
    			</div>
  			</nav>
		)
}


const mapStateToProps = state =>{
  
  return state
}


export default connect(mapStateToProps)(NavBar)