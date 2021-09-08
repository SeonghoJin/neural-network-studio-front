import React from 'react';
import MainLocationFilter from '../filter/MainLocationFilter';
import Navigation from '../components/nav';
import Main from '../components/Landing/main/main';

export const Landing = () => {
	return (
		<>
			<MainLocationFilter />
			<Navigation />
			<Main />
		</>
	);
};
