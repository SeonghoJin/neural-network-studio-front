import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import Authentication from './components/Authentication';
import ProjectRouter from './Router/ProjectRouter';
import DashBoardRouter from './Router/DashBoardRouter';
import { DynamicPath, StaticPath } from './components/PagePathConsts';
import { AssetPage, LandingPage, NotFoundPage, ProfileModifyPage, ProfilePage, SignInPage, SignUpPage } from './Pages';
import ProjectShareRouter from './Router/ProjectShareRouter';
import './static/css/aos.css';
import './static/css/common.css';
import './static/css/swiper.min.css';
import useLogout from './hooks/useLogout';

function App() {
	const logoutResult = useLogout();

	return (
		<>
			{logoutResult.loading && logoutResult.loadingFallback}
			{logoutResult.error && logoutResult.errorFallback}
			{logoutResult.success && logoutResult.successFallback}
			<BrowserRouter>
				<Authentication>
					<Switch>
						<Route exact path={StaticPath.MAIN} component={LandingPage} />
						<Route exact path={StaticPath.LOGIN} component={SignInPage} />
						<Route exact path={StaticPath.SIGN_UP} component={SignUpPage} />
						<Route exact path={StaticPath.PROFILE} component={ProfilePage} />
						<Route exact path={StaticPath.PROFILE_MODIFY} component={ProfileModifyPage} />
						<Route exact path={StaticPath.ASSET_MAIN} component={AssetPage} />
						<Route path={StaticPath.PROJECT} component={ProjectRouter} />
						<Route path={DynamicPath.PROJECT_SHARE} component={ProjectShareRouter} />
						<Route path={StaticPath.DASHBOARD} component={DashBoardRouter} />
						<Route component={NotFoundPage} />
					</Switch>
				</Authentication>
			</BrowserRouter>
		</>
	);
}

export default App;
