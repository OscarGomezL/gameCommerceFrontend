const changeCheckReducer = (state=true, actions) => {
	switch(actions.type) {
		case '' :
			state = actions.payload
			return state
		default :
			return state
	}
}
export default changeCheckReducer