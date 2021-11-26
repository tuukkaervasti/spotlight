/* import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Grid from "./components/Grid.js";

function App() {
  return(
    <div className="container">
      <Grid />
    </div>
  )
} */

import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Project from './pages/project';
import About from './pages/about';

function App() {
return (
	<Router>
	<Navbar />
	<Switch>
		<Route path='/project' component={Project} />
		<Route path='/about' component={About} />
	</Switch>
	</Router>
);
}

export default App;
