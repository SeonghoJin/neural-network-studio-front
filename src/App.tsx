import React from 'react';
import $ from 'jquery';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
import useDeleteProject from './hooks/useDeleteProject';
import { UpdatePasswordPage } from './Pages/UpdatePasswordPage';
import { DataSetStorePage } from './Pages/DataSetStorePage';
import { CreateDataSetPage } from './Pages/CreateDataSetPage';

function App() {
	const logoutResult = useLogout();
	const deleteDashboardResult = useDeleteProject();
	return (
		<>
			{logoutResult.loading && logoutResult.loadingFallback}
			{deleteDashboardResult.loading && deleteDashboardResult.loadingFallback}
			<BrowserRouter>
				<Authentication>
					<Switch>
						<Route exact path={StaticPath.MAIN} component={LandingPage} />
						<Route exact path={StaticPath.LOGIN} component={SignInPage} />
						<Route exact path={StaticPath.SIGN_UP} component={SignUpPage} />
						<Route exact path={StaticPath.UPDATE_PASSWORD} component={UpdatePasswordPage} />
						<Route exact path={StaticPath.PROFILE} component={ProfilePage} />
						<Route exact path={StaticPath.PROFILE_MODIFY} component={ProfileModifyPage} />
						<Route exact path={StaticPath.ASSET_MAIN} component={AssetPage} />
						<Route exact path={StaticPath.DATASET_STORE} component={DataSetStorePage} />
						<Route exact path={StaticPath.CREATE_DATASET_STORE} component={CreateDataSetPage} />
						<Route path={StaticPath.PROJECT} component={ProjectRouter} />
						<Route path={DynamicPath.PROJECT_SHARE} component={ProjectShareRouter} />
						<Route path={StaticPath.DASHBOARD} component={DashBoardRouter} />
						<Route exact path={StaticPath.DATASET_STORE} component={DataSetStorePage} />
						<Route component={NotFoundPage} />
					</Switch>
				</Authentication>
			</BrowserRouter>
		</>
	);
}

export default App;
