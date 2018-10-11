import React, { Component } from 'react';

//redux imports go here
//connect connects react component with store
import {connect} from 'react-redux'

//action Dispatch for redux
import addName from './redux/actions/appActions'




const App = (props)=> {
  console.log(props)
  return(
    <div>
      <h1>Hello from simple redux {props.name[0]}</h1>
      <form onSubmit={(e)=>{
        e.preventDefault()
        props.addName('youseffff')}
      }>
        <input type='text'  />
        <button>Submit</button>
      </form>
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
