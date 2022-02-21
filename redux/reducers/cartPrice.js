const cartPriceReducer = (state = 0, action) => {
	switch(action.type) {
		case 'INCREASE' :
			state+=action.payload
			return state
		case 'DECREASE' :
			state-=action.payload
			return state
		case 'PATCH':
			state = action.payload
			return state
		default:
			return state
	}
}
export default cartPriceReducer