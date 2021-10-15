import React from 'react';
import PrivateAuthentication from '../components/Authentication/PrivateAuthentication';
import Navigation from '../components/nav';
import ProfileMain from '../components/profile/default/main';
import useUpdateUserProfile from '../hooks/useUpdateUserProfile';

export const Profile = () => {
	const { loadingFallback, loading } = useUpdateUserProfile();
	return (
		<PrivateAuthentication>
			<div id="container">
				{loading && loadingFallback}
				<Navigation currentMenu={0} />
				<section className="asset">
					<div className="wrap">
						<ProfileMain />
					</div>
				</section>
				<footer className="footer">Copyright 2021 ⓒ Neural network studio</footer>
			</div>
		</PrivateAuthentication>
	);
};
