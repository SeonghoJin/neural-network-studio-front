import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { ReactFlowProvider } from 'react-flow-nns';
import { Landing, Profile, Signup } from './routes/index';
import Authentication from './Authentication';
import ProjectRouter from './Router/ProjectRouter';
import DashBoardRouter from './Router/DashBoardRouter';
import NotFound from './Pages/NotFound';
import SignIn from './components/auth/signin';
import ModifyProfile from './components/profile/modify';
import { DynamicPath, StaticPath } from './pagePathName';
import Asset from './Pages/Asset';
import ProjectShare from './components/project/ProjectShare';
import ProjectShareRouter from './Router/ProjectShareRouter';

function App() {
	return (
		<BrowserRouter>
			<Authentication>
				<Switch>
					<Route exact path={StaticPath.MAIN} component={Landing} />
					<Route exact path={StaticPath.LOGIN} component={SignIn} />
					<Route exact path={StaticPath.SIGN_UP} component={Signup} />
					<Route exact path={StaticPath.PROFILE} component={Profile} />
					<Route exact path={StaticPath.PROFILE_MODIFY} component={ModifyProfile} />
					<Route exact path={StaticPath.ASSET_MAIN} component={Asset} />
					<Route path={StaticPath.PROJECT} component={ProjectRouter} />
					<Route path={DynamicPath.PROJECT_SHARE} component={ProjectShareRouter} />
					<Route path={StaticPath.DASHBOARD} component={DashBoardRouter} />
					<ReactFlowProvider>
						<Route path={DynamicPath.PROJECT_SHARE} exact component={ProjectShare} />
					</ReactFlowProvider>
					<Route component={NotFound} />
				</Switch>
			</Authentication>
		</BrowserRouter>
	);
}

export default App;
