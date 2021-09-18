import { makeStyles } from '@material-ui/core';
import React from 'react';
import PrivateAuthentication from '../components/Authentication/PrivateAuthentication';
import Navigation from '../components/nav';
import ModifyProfileMain from '../components/profile/modify/main';

export const ModifyProfile = () => {
	return (
		<PrivateAuthentication>
			<div id="container">
				<Navigation />
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
