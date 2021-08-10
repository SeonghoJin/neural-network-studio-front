import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Landing, LoginPage, Profile, Signup } from './routes/index';
import ProjectRouter from './Router/ProjectRouter';
import Authentication from './Authentication';
import NotFound from './Pages/NotFound';
import DashBoardRouter from './Router/DashBoardRouter';

function App() {
	return (
		<BrowserRouter>
			<Authentication>
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route exact path="/login" component={LoginPage} />
					<Route exact path="/signup" component={Signup} />
					<Route exact path="/project" component={ProjectRouter} />
					<Route exact path="/dashboard" component={DashBoardRouter} />
					<Route exact path="/profile" component={Profile} />
					<Route component={NotFound} />
				</Switch>
			</Authentication>
		</BrowserRouter>
	);
}

export default App;
