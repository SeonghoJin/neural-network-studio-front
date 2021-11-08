import React, { ReactNode } from 'react';
import ProjectEditorNavMainContentContainer from './ProjectEditorNavMainContentContainer';
import ProjectEditorNavOptionContentContainer from './ProjectEditorNavOptionContentContainer';

const ProjectEditorNav = () => {
	return (
		<div className="hd-section">
			<div className="hd-l">
				<div className="tit">편집</div>
				<ProjectEditorNavMainContentContainer />
			</div>

			<div className="hd-r">
				<ProjectEditorNavOptionContentContainer />
			</div>
		</div>
	);
};

export default ProjectEditorNav;
