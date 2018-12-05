import asyncState from '../../state'
import movie_list from './movies'

const initialState = {
	movies: [],
	message: ""
}

export default function movies(state=initialState, action){
	switch(action.type){

		case 'GET_MOVIES_REQUEST': {
			return {
				...state,
				asyncState: asyncState.loading
			}
		}

		case 'GET_MOVIES_SUCCESS': {
			return {
				...state,
				movies: movie_list,
				asyncState: asyncState.loaded
			}
		}

		case 'GET_MOVIES_ERROR': {
			return {
				...state,
				message: action.payload.error,
				asyncState: asyncState.error
			}
		}

		case 'GET_POSTER_REQUEST': {
			return {
				...state,
				asyncState: asyncState.loading
			}
		}

		case 'GET_POSTER_SUCCESS': {
			return {
				...state,
				asyncState: asyncState.loaded
			}
		}

		case 'GET_POSTER_ERROR': {
			return {
				...state,
				message: action.payload.error,
				asyncState: asyncState.error
			}
		}

		default: {
			return state
		}
	}
}
