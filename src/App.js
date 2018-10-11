import React, { Component } from 'react';

//redux imports go here
//connect connects react component with store
import {connect} from 'react-redux'

const App = (props)=> {
  return(
    <div>
      <h1>Hello from simple redux {props.name[0]}</h1>
    </div>
  )
}
  


//map our state from redux to  pass to react component as props
const mapStateToProps = state =>{
  console.log(state)
  return {
    name: state.name

  }
}


export default connect(mapStateToProps)(App);
