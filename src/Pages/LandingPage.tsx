import React from 'react';
import AuthNavigation from '../components/nav/AuthNavigation/AuthNavigation';
import LandingMain from '../components/Landing/main/main';

export const Landing = () => {
	return (
		<>
			<div id="container">
				<section className="intro">
					<AuthNavigation />
					<LandingMain />
				</section>
			</div>
		</>
	);
};
