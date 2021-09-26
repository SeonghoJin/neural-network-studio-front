import React from 'react';
import ProjectShareNavOptionContentContainer from '../../project/ProjectShare/ProjectShareNav/ProjectShareNavOptionContentContainer';

export const ProjectEditorShareNav = () => {
	return (
		<div className="hd-section">
			<div className="hd-l">
				<div className="tit">편집 공유</div>
			</div>

			<div className="hd-r">
				<ProjectShareNavOptionContentContainer />
			</div>
		</div>
	);
};
