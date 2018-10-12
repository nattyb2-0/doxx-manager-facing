// function report (start, depositsTo,addOn, deposit) {
//     this.start = start;
//     this.depositsTo = depositsTo;
//     this.addOn = addOn;
//     this.deposit= deposit;
//     this.operationsCash = start + depositsTo +addOn - deposit
// }

const something = (start,depositsTo,addOn,deposit)=>{
	return{
		start: start,
		depositsTo: depositsTo,
		addOn: addOn,
		deposit: deposit,
		operationsCash: 0
		
	}
}

const initialState = something(0, 0, 0, 0)



const formReducer = (state=initialState, action) => {
	
	switch(action.type){

		case 'CHANGE_START':
			return{
			...state,
			start: parseFloat(action.start)



		}	;
		case 'CHANGE_DEPOSITS_TO':
			return{
			...state,
			depositsTo: parseFloat(action.depositsTo)

			};
		case 'CHANGE_USD_ADD':
			return{
			...state,
			addOn: parseFloat(action.addOn)

			};
		case 'CHANGE_USD_DEPOSITED':
			return{
			...state,
			deposit: parseFloat(action.deposit)

			};
		case 'CHANGE_OPERATIONS_CASH':
		console.log(state)
		let i=0

			return{
				...state,
				operationsCash: parseFloat(parseFloat(i+state.start) +parseFloat(i+state.depositsTo)+ parseFloat(i+state.addOn) -parseFloat(i+state.deposit))

			};
		default:
			return state;
	}
	
}



export default formReducer