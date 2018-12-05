import { getOnGoingMovies } from './api'
import { makeActionCreator } from '../../helper/actionHelper'

// GET MOVIE LIST
const getMoviesRequest = makeActionCreator("GET_MOVIES_REQUEST")
const getMoviesSuccess = makeActionCreator("GET_MOVIES_SUCCESS")
const getMoviesError = makeActionCreator("GET_MOVIES_ERROR")
// GET MOVIE POSTER
const getPosterRequest = makeActionCreator("GET_POSTER_REQUEST")
const getPosterSuccess = makeActionCreator("GET_POSTER_SUCCESS")
const getPosterError = makeActionCreator("GET_POSTER_ERROR")

export function getMovies(){
	return async function(dispatch){

		dispatch(getMoviesRequest())
		try {
			const response = await getOnGoingMovies('ID')
			const result = await response.json()

			//if(response.ok){
				dispatch(getMoviesSuccess({data: result.results}))
			//}

			//throw new Error(result.status_message)

		}catch(error){
			dispatch(getMoviesError({error: error.message}))
		}
		
	}
}

