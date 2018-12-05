import React, { Component } from 'react'

const Navbar = props => {
	return (
		<div className="navbar">
			<ul className="navbar__menu">
				<li className="navbar__brand">myFlix</li>
				<li>User</li>
			</ul>
		</div>
	)
}

export default Navbar