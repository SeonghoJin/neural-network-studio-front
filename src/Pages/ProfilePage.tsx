import { makeStyles } from '@material-ui/core';
import React from 'react';
import PrivateAuthentication from '../components/Authentication/PrivateAuthentication';
import Navigation from '../components/nav';
import ProfileMain from '../components/profile/default/main';

export const Profile = () => {
	return (
		<PrivateAuthentication>
			<div id="container">
				<Navigation />
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
