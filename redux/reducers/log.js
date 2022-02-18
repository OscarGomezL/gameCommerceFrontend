const logReducer = (state = false, actions) => {
	switch(actions.type) {
		case 'PATCH' :
			localStorage.setItem("User",JSON.stringify(actions.payload))
			state = actions.payload
			return state
		case 'DELETE' :
			localStorage.removeItem("User")
			state=null
			return state
		default:
			return state
	}
}
export default logReducer