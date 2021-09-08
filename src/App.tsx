import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { ReactFlowProvider } from 'react-flow-nns';
import Authentication from './Authentication';
import ProjectRouter from './Router/ProjectRouter';
import DashBoardRouter from './Router/DashBoardRouter';
import NotFound from './Pages/NotFound';
import { DynamicPath, StaticPath } from './pagePathName';
import Asset from './Pages/Asset';
import ProjectShareRouter from './Router/ProjectShareRouter';
import ProjectShare from './Pages/ProjectShare';
import ProfileModifyPage from './Pages/ProfileModifyPage';
import ProfilePage from './Pages/ProfilePage';
import LandingPage from './Pages/LandingPage';
import SignInPage from './Pages/SignInPage';
import SignUpPage from './Pages/SignUpPage';

function App() {
	return (
		<BrowserRouter>
			<Authentication>
				<Switch>
					<Route exact path={StaticPath.MAIN} component={LandingPage} />
					<Route exact path={StaticPath.LOGIN} component={SignInPage} />
					<Route exact path={StaticPath.SIGN_UP} component={SignUpPage} />
					<Route exact path={StaticPath.PROFILE} component={ProfilePage} />
					<Route exact path={StaticPath.PROFILE_MODIFY} component={ProfileModifyPage} />
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
