import {combineReducers} from 'redux'
import searchReducer from './searchGame'
import logReducer from './log'

const allReducers = combineReducers({
	search: searchReducer,
	log: logReducer,
})

export default allReducers