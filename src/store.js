import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

const middleware = [thunk] // you can add more if you want

const store = createStore(
	rootReducer,
	compose( applyMiddleware(...middleware) )
)

export default store