// function takes in a parameter which it receives from component via matchDispatchToProps
//it then dispaches the action type and payload to the reducer
const addName = name =>{
	return (dispatch, getState) => {
		dispatch({
			type: 'ADD_NAME',
			name: name
		})
    }
}


export default addName