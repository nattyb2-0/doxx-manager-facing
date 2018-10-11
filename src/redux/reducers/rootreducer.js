import navReducer from './navReducers'
import formReducer from './formReducers'

import {combineReducers } from 'redux'



//function that updates state to our app
//state is set to an init state value ...this state is passed to app in component
//once we connect app 
// const appReducer = (state=initialState, action) => {
// 	switch (action.type){
// 		case 'ADD_NAME' :
// 			return {...state, name:[...state.name, action.name]}
// 		default: return state
// 		}
	
// }



const appReducer = combineReducers({
	//PASS IN STATE FROM AUTH AND PROJECT REDUCER TO BE PROPS ON COMPONENTS
	nav: navReducer,
	form: formReducer
	
})



export default appReducer;