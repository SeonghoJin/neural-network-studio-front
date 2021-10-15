import React from 'react';
import EditorNavigation from '../../nav/EditorNavigation';
import useAuthentication from '../../../hooks/useAuthentication';

type Props = {
	currentMenu: number;
};

const ProjectNav = ({ currentMenu }: Props) => {
	const { user } = useAuthentication();
	return <EditorNavigation user={user} currentMenu={currentMenu} />;
};

export default ProjectNav;
