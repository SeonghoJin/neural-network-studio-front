import React, { ReactNode } from 'react';
import icoShare1 from '../../../../static/img/ico_share1.png';
import icoSave1 from '../../../../static/img/ico_save1.png';
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
