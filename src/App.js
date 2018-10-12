import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar'
//redux imports go here
//connect connects react component with store
import {connect} from 'react-redux'

//action Dispatch htmlFor redux
import addName from './redux/actions/appActions'

import changeStart from './redux/actions/formActions'
import changeDepositsTo from './redux/actions/formActions'
import changeUsdAdd from './redux/actions/formActions'
import changeUsdDeposited from './redux/actions/formActions'
import changeOperationCash from './redux/actions/formActions'







const App = (props)=> {


  const me = (e)=>{
    console.log(props.start,props.depositsTo,props.addOn,props.deposit)
    props.changeStart(e.target.value)
    props.changeOperationCash()
  }
   const me1 = (e)=>{
    console.log(props.start,props.depositsTo,props.addOn,props.deposit)
    props.changeDepositsTo(e.target.value)
    props.changeOperationCash()
  }
  const me2 = (e)=>{
    console.log(props.start,props.depositsTo,props.addOn,props.deposit)
    props.changeUsdAdd(e.target.value)
    props.changeOperationCash()
  }
  const me3 = (e)=>{
    console.log(props.start,props.depositsTo,props.addOn,props.deposit)
    props.changeUsdDeposited(e.target.value)
    props.changeOperationCash()
  }

  return(
    <div>
      <NavBar />
      <div className=' appContainer'>
        <div className="row">
          <div className="col s12 m4">
            <div className="row">
              <div className="row">
              <ul className ='col s3 m3'>
                <li><a className="waves-effect waves-light btn red">USD REPORTING</a></li>
              </ul>
              <ul className ='col s3 m3' >
                <li><a className="waves-effect waves-light btn red">LD REPORTING</a></li>
              </ul>
              <ul className ='col s3 m3' >
                <li ><a className="waves-effect waves-light btn red">SB CASHCLEAR</a></li>
              </ul>
              <ul className ='col s3 m3' >
                <li><a onClick ={(e)=> console.log(e.target.id)} className="waves-effect waves-light btn red" id={1}>CASINO CASH CLEAR</a></li>
              </ul>
              </div>
              <form className="htmlForm col s12 m12">
                <fieldset>
                  <legend>USD Operations</legend>
                <div className="input-field">
                  <input placeholder="TYPE IN AMOUNT" 
                    id="changeStart"  
                    type="text" 
                    className="validate" 
                    onChange={me}/>
                  <label htmlFor="first_name">USD Brought htmlForward</label>
                </div>
                <div className="input-field">
                  <input placeholder="Placeholder" id="first_name" type="text" className="validate"  onChange={me1}/>
                  <label htmlFor="first_name">USD Deposits To</label>
                </div>
                <div className="input-field">
                  <input placeholder="Placeholder" id="first_name" type="text" className="validate" onChange={me2}/>
                  <label htmlFor="first_name">USD ADD ON FROM CHANGING</label>
                </div>
                <div className="input-field">
                  <input placeholder="Placeholder" id="first_name" type="text" className="validate" onChange={me3}/>
                  <label htmlFor="first_name">USD DEPOSITED</label>
                </div>
                <div className="input-field">
                  <input disabled id="disabled" type="text" className="validate" value={parseInt(props.operationCash)}/>
                  <label htmlFor="disabled">Total Operation Cash</label>
                </div>
                <div className="input-field">
                  <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
                  <label htmlFor="first_name">SPORTS BOX PAY</label>
                </div>
                <div className="input-field">
                  <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
                  <label htmlFor="first_name">CASINO PAY</label>
                </div>
                <div className="input-field">
                  <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
                  <label htmlFor="first_name">USD CHANGED TO LD</label>
                </div>
                <div className="input-field">
                  <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
                  <label htmlFor="first_name">ERROR</label>
                </div>
                <div className="input-field">
                  <input disabled value={100+450+90+80-78} id="disabled" type="text" className="validate"/>
                  <label htmlFor="disabled">Balance USD</label>
                </div>
                </fieldset>
              </form>
              
            </div> 
          </div>

          <div className="col col s12 m8  ">
            <table>
              <tbody>
                <tr>
                  <td>USD BROUGHT FORWARD</td>
                  <td>${props.start}</td>
                </tr>
                <tr>
                  <td>USD Deposits To</td>
                  <td>${props.depositsTo}</td>
                </tr>
                <tr>
                  <td>USD Add ON FROM CHANGING</td>
                  <td>${props.addOn}</td>
                </tr>
                <tr>
                  <td>USD DEPOSITED</td>
                  <td>${props.deposit}</td>
                </tr>
                <tr>
                  <td>TOTAL OPERATIONS CASH</td>
                  <td>${props.operationCash}</td>
                </tr>
                </tbody>
                <tbody>
                <tr>
                  <td>SB PAY</td>
                  <td>$0</td>
                </tr>
                <tr>
                  <td>CASINO PAY</td>
                  <td>$0</td>
                </tr>
                <tr>
                  <td>USD CHANGED TO LD</td>
                  <td>$0</td>
                </tr>
                <tr>
                  <td>ERROR</td>
                  <td>$0</td>
                </tr>
                <tr>
                  <td>BALANCE USD</td>
                  <td>$0</td>
                </tr>
              </tbody>
      </table>

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
    start: state.form.start,
    depositsTo: state.form.depositsTo,
    addOn: state.form.addOn,
    deposit: state.form.deposit,
    operationCash: state.form.operationsCash
  }
}

//map our dispatch call For our actions to state
const mapDispatchToProps = dispatch =>{
  return {
    addName: (name)=> dispatch(addName(name)),
    changeStart: (amount)=> dispatch(changeStart.changeStart(amount)),
    changeDepositsTo: (amount)=> dispatch(changeDepositsTo.changeDepositsTo(amount)),
    changeUsdAdd: (amount)=> dispatch(changeUsdAdd.changeUsdAdd(amount)),
    changeUsdDeposited: (amount)=> dispatch(changeUsdDeposited.changeUsdDeposited(amount)),
    changeOperationCash: ()=> dispatch(changeOperationCash.changeOperationCash())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
