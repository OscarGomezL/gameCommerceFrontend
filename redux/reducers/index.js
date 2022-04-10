import {combineReducers} from 'redux'
import searchReducer from './searchGame'
import logReducer from './log'
import changeCheckReducer from './changeCheck'

const allReducers = combineReducers({
	search: searchReducer,
	log: logReducer,
	changeCheck: changeCheckReducer,
})

export default allReducers