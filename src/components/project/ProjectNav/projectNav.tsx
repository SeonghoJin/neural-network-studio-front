import React from 'react';
import EditorNavigation from '../../nav/EditorNavigation';
import useAuthentication from '../../../hooks/useAuthentication';

const ProjectNav = () => {
	const { user } = useAuthentication();
	return <EditorNavigation user={user} />;
};

export default ProjectNav;
