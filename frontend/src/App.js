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
import Contact from "./pages/contact";
import Aron from "./pages/aron";
import Benjamin from "./pages/benjamin";
import Cecilia from "./pages/cecilia";
import Gustaf from "./pages/gustaf";
import Jori from "./pages/jori";
import Amir from "./pages/amir";
import Logo from "./images/logo.png";

function App() {
return (
	<Router>
	<Navbar />
	<Switch>
		<Route path='/project' component={Project} />
		<Route path='/about' component={About} />
		<Route path="/contact" component={Contact} />
		<Route path="/aron" component={Aron} />
		<Route path="/benjamin" component={Benjamin} />
		<Route path="/cecilia" component={Cecilia} />
		<Route path="/gustaf" component={Gustaf} />
		<Route path="/jori" component={Jori} />
		<Route path="/amir" component={Amir} />
	</Switch>
	</Router>
	
);
}

export default App;
