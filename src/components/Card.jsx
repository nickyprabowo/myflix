import React, { Component } from 'react'

class Card extends Component {
	constructor(props){
		super(props)
		this.state = {
			price: 0,
			image_url: "https://image.tmdb.org/t/p/w300",
			rating: 0
		}
	}

	static getDerivedStateFromProps(props, state){
		if(state.rating !== props.data.vote_average){
			return {
				rating: props.data.vote_average
			}
		}
		return null
	}

	componentDidMount() {
	    if (this.state.rating !== 0) {
	      this.moviePrice(this.state.rating);
	    }
	}

	moviePrice(rating){
		let price = 0;
		if(rating >=1 & rating <=3){
			price = 3500
		}else if(rating >3 & rating <=6){
			price = 8250
		}else if(rating >6 & rating <=8){
			price = 16350
		}else if(rating >8){
			price = 21250
		}

		this.setState({
			price
		})
	}

	render(){
		const { data } = this.props
		const poster = `${this.state.image_url}${data.poster_path}`
		return(
			<div className="card">
				<img src={poster} />
				<h3>{data.title}</h3>
				<p className="card__price"></p>
				<p className="ownership"></p>
			</div>
		)
	}
}

export default Card