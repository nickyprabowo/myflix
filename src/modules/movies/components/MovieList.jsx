import React, { Component, Fragment } from 'react'
import Card from '../../../components/Card'

export default class MovieList extends Component {

	componentDidMount(){
		this.props.getMovies()
	}

	render(){
		const { movies, getPoster } = this.props
		return(
			<div className="cards">
				{movies.map( movie => {
					return (
						<Card 
							key={movie.id}
							data={movie}
							getPoster={getPoster}
						/>
					)
				})}
			</div>
		)
	}
}