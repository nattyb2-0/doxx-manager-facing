import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar'
//redux imports go here
//connect connects react component with store
import {connect} from 'react-redux'

//action Dispatch for redux
import addName from './redux/actions/appActions'




const App = (props)=> {
  return(
    <div>
      <NavBar />
      <div className=' appContainer'>
        <div className="row">
          <div className="col s12 m5">
            <div className="row">
              <form className="form col s12 m6">
                <fieldset>
                  <legend>USD Operations</legend>
                <div className="input-field">
                  <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
                  <label for="first_name">USD Brought Forward</label>
                </div>
                <div className="input-field">
                  <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
                  <label for="first_name">USD Deposits To</label>
                </div>
                <div className="input-field">
                  <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
                  <label for="first_name">USD ADD ON FROM CHANGING</label>
                </div>
                <div className="input-field">
                  <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
                  <label for="first_name">USD DEPOSITED</label>
                </div>
                <div className="input-field">
                  <input disabled value={100+450+90+80-78+1200} id="disabled" type="text" className="validate"/>
                  <label for="disabled">Total Operation Cash</label>
                </div>
                <div className="input-field">
                  <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
                  <label for="first_name">SPORTS BOX PAY</label>
                </div>
                <div className="input-field">
                  <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
                  <label for="first_name">CASINO PAY</label>
                </div>
                <div className="input-field">
                  <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
                  <label for="first_name">USD CHANGED TO LD</label>
                </div>
                <div className="input-field">
                  <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
                  <label for="first_name">ERROR</label>
                </div>
                <div className="input-field">
                  <input disabled value={100+450+90+80-78} id="disabled" type="text" className="validate"/>
                  <label for="disabled">Balance USD</label>
                </div>
                </fieldset>
              </form>
              <form className="form col s12 m6">
                <fieldset>
                  <legend>LD Breakdown</legend>
                <div className="input-field">
                  <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
                  <label for="first_name">First Name</label>
                </div>
                <div className="input-field">
                  <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
                  <label for="first_name">First Name</label>
                </div>
                <div className="input-field">
                  <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
                  <label for="first_name">First Name</label>
                </div>
                <div className="input-field">
                  <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
                  <label for="first_name">First Name</label>
                </div>
                <div className="input-field">
                  <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
                  <label for="first_name">First Name</label>
                </div>
                <div className="input-field">
                  <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
                  <label for="first_name">First Name</label>
                </div>
                </fieldset>
              </form>
              <form className="form col s12 m12">
                <fieldset>
                  <legend>LD Breakdown</legend>
                <div className="input-field">
                  <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
                  <label for="first_name">First Name</label>
                </div>
                <div className="input-field">
                  <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
                  <label for="first_name">First Name</label>
                </div>
                <div className="input-field">
                  <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
                  <label for="first_name">First Name</label>
                </div>
                <div className="input-field">
                  <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
                  <label for="first_name">First Name</label>
                </div>
                <div className="input-field">
                  <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
                  <label for="first_name">First Name</label>
                </div>
                <div className="input-field">
                  <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
                  <label for="first_name">First Name</label>
                </div>
                </fieldset>
              </form>
            </div> 
          </div>

          <div className="col col s12 m7 ">
            <h1 className="center">right</h1>
          </div>

        </div>
      </div>
    </div>
  )
}
  


//map our state from redux to  pass to react component as props
//state here comes from the root reducer function
const mapStateToProps = state =>{
  return {
    name: state.name

  }
}
//map our dispatch call for our actions to state
const mapDispatchToProps = dispatch =>{
  return {
    addName: (name)=> dispatch(addName(name))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
