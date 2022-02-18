import {combineReducers} from 'redux'
import searchReducer from './searchGame'

const allReducers = combineReducers({
	search: searchReducer
})

export default allReducers
