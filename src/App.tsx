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
import { PagePathName } from './pagePathName';
import Asset from './Pages/Asset';

function App() {
	return (
		<BrowserRouter>
			<Authentication>
				<Switch>
					<Route exact path={PagePathName.MAIN} component={Landing} />
					<Route exact path={PagePathName.LOGIN} component={SignIn} />
					<Route exact path={PagePathName.SIGN_UP} component={Signup} />
					<Route path={PagePathName.PROJECT} component={ProjectRouter} />
					<Route path={PagePathName.DASHBOARD} component={DashBoardRouter} />
					<Route exact path={PagePathName.PROFILE} component={Profile} />
					<Route exact path={PagePathName.PROFILE_MODIFY} component={ModifyProfile} />
					<Route exact path={PagePathName.ASSET_MAIN} component={Asset} />
					<Route component={NotFound} />
				</Switch>
			</Authentication>
		</BrowserRouter>
	);
}

export default App;
