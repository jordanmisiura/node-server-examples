// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './App';
import About from './About';

const Routes = (props) => (
  <Router {...props}>
  	<div>
    	<Route path="/" component={App} />
    	<Route path="/about" component={About} />
    </div>
  </Router>
);

export default Routes;