import React from 'react';
import Main from './main/main';
import Navigation from '../nav';
import MainLocationFilter from '../../filter/MainLocationFilter';

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
