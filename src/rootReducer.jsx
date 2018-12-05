import { combineReducers } from 'redux'
import movies from './modules/movies/reducer'

export default combineReducers({
	movies // you can add more as the app grows
})