import {combineReducers} from 'redux'
import searchReducer from './searchGame'
import logReducer from './log'
import cartPriceReducer from './cartPrice'

const allReducers = combineReducers({
	search: searchReducer,
	log: logReducer,
	cartPrice: cartPriceReducer,
})

export default allReducers