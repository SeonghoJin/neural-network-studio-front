import React from 'react';
import PrivateAuthentication from '../components/Authentication/PrivateAuthentication';
import Navigation from '../components/nav';
import ModifyProfileMain from '../components/profile/modify/main';
import useUpdateUserProfile from '../hooks/useUpdateUserProfile';

export const ModifyProfile = () => {
	const { loading, loadingFallback } = useUpdateUserProfile();
	return (
		<PrivateAuthentication>
			<div id="container">
				{loading && loadingFallback}
				<Navigation currentMenu={0} />
				<section className="asset">
					<div className="wrap">
						<ModifyProfileMain />
					</div>
				</section>
				<footer className="footer">Copyright 2021 ⓒ Neural network studio</footer>
			</div>
		</PrivateAuthentication>
	);
};
