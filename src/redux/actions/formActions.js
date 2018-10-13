// function takes in a parameter which it receives from component via matchDispatchToProps
//it then dispaches the action type and payload to the reducer

const changeStart = amount =>{
	return (dispatch, getState) => {
		dispatch({
			type: 'CHANGE_START',
			start: amount || 0
		})
    }
}

  

const changeDepositsTo = amount =>{
	
	return (dispatch, getState) => {
		dispatch({
			type: 'CHANGE_DEPOSITS_TO',
			depositsTo: amount|| 0
		})
    }
}

const changeUsdAdd = amount =>{
	return (dispatch, getState) => {
		dispatch({
			type: 'CHANGE_USD_ADD',
			addOn: amount || 0
		})
    }
}

const changeUsdDeposited = amount =>{
	return (dispatch, getState) => {
		dispatch({
			type: 'CHANGE_USD_DEPOSITED',
			deposit: amount || 0
		})
    }
}

const changeOperationCash = (start,changed,depositTo, deposit)=>{
	return (dispatch, getState) => {
		dispatch({
			type: 'CHANGE_OPERATIONS_CASH'
		})
    }

}


export default {changeStart, changeDepositsTo , changeUsdDeposited , changeUsdAdd, changeOperationCash}