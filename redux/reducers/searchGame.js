const searchReducer = (state = "", action) => {
	switch(action.type) {
		case 'DS' :
			return [action.type , action.payload]
		case 'WII' :
			return [action.type , action.payload]
		case 'XBOX360' :
			return [action.type , action.payload]
		default:
			return state	
	}
}
export default searchReducer