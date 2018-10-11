const initialState = {
	name: ['natty', 'Brenda', 'Ashley']
}

//function that updates state to our app
//state is set to an init state value ...this state is passed to app in component
//once we connect app 
const appReducer = (state=initialState, action) => {
	switch (action.type){
		case 'ADD_NAME' :
			return {...state, name:[...state.name, action.name]}
		default: return state
		}
	
}


export default appReducer;