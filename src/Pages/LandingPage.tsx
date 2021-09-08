import React from 'react';
import MainLocationFilter from '../filter/MainLocationFilter';
import Navigation from '../components/nav';
import Main from '../components/Landing/main/main';

const Landing = () => {
	return (
		<>
			<MainLocationFilter />
			<Navigation />
			<Main />
		</>
	);
};

export default Landing;
