import React from 'react';
import LandingMain from '../components/Landing/main/main';
import Navigation from '../components/nav';

export const Landing = () => {
	return (
		<>
			<div id="container">
				<section className="intro">
					<Navigation />
					<LandingMain />
				</section>
			</div>
		</>
	);
};
