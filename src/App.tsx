// eslint-disable-next-line no-use-before-define
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TestRouter from './Router/test/TestRouter';
import configs from './config';
import './App.css';
import { Dashboard, Landing, LoginPage, NewProject, Profile, Signup } from './routes/index';
import ProjectRouter from './Router/ProjectRouter';
import LoginAuthentication from './Authentication/LoginAuthentication';
import Authentication from './Authentication';

function App() {
	return (
		<BrowserRouter>
			<Authentication />
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route path="/login" component={LoginPage} />
				<Route path="/signup" component={Signup} />
				{configs.NODE_ENV === 'development' && <Route path="/test/:test_component/:id" exact component={TestRouter} />}
				<LoginAuthentication>
					<Route path="/project" component={ProjectRouter} />
					<Route path="/dashboard" component={Dashboard} />
					<Route path="/newProject" component={NewProject} />
					<Route path="/profile" component={Profile} />
				</LoginAuthentication>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
