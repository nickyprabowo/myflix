const url = "https://api.themoviedb.org"
const api_key = "45ccd47c5b0041e665e19cf182c6b280"

export const getOnGoingMovies = (region) => {
	const target = `${url}/3/movie/now_playing?api_key=&region=${region}`
	//return target
	return fetch(target, {method: 'GET'})
}
