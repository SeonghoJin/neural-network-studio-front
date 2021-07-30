// eslint-disable-next-line no-use-before-define
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './Pages/main';
import TestRouter from './Router/test/TestRouter';
import configs from './config';
import './App.css';
import { Landing, Signup, Dashboard, NewProject, LoginPage, Profile } from './routes/index';
import ProjectRouter from './Router/ProjectRouter';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				{configs.NODE_ENV === 'development' && <Route path="/test/:test_component/:id" exact component={TestRouter} />}
				<Route path="/project" component={ProjectRouter} />
				<Route exact path="/" component={Landing} />
				<Route path="/signup" component={Signup} />
				<Route path="/dashboard" component={Dashboard} />
				<Route path="/newProject" component={NewProject} />
				<Route path="/login" component={LoginPage} />
				<Route path="/profile" component={Profile} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
