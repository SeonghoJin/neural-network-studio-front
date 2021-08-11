import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Landing, Profile, Signup } from './routes/index';
import Authentication from './Authentication';
import ProjectRouter from './Router/ProjectRouter';
import DashBoardRouter from './Router/DashBoardRouter';
import NotFound from './Pages/NotFound';
import SignIn from './components/auth/signin';
import ModifyProfile from './components/profile/modify';

function App() {
	return (
		<BrowserRouter>
			<Authentication>
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route exact path="/login" component={SignIn} />
					<Route exact path="/signup" component={Signup} />
					<Route path="/project" component={ProjectRouter} />
					<Route path="/dashboard" component={DashBoardRouter} />
					<Route exact path="/profile" component={Profile} />
					<Route exact path="/profile/modify" component={ModifyProfile} />
					<Route component={NotFound} />
				</Switch>
			</Authentication>
		</BrowserRouter>
	);
}

export default App;
