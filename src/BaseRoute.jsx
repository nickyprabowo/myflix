import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'

const BaseRoute = ({store}) => {
	return (
		<Provider store={store}>
          <Router>
              <Route to="/" component={App} />
          </Router>
        </Provider>
	)
}

export default BaseRoute