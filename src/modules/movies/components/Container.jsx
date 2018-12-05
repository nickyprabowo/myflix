import React, { Component } from 'react'
import * as MovieActions from '../actions'
import { connect } from 'react-redux'
import MovieList from './MovieList'

function mapStateToProps(state){
	const { movies } = state

	return {
		...movies
	}
}

class MovieContainer extends Component {
	render(){
		return (
			<div>
				<MovieList {...this.props} />
			</div>
		)
	}
}

export default connect(mapStateToProps, {...MovieActions})(MovieContainer)