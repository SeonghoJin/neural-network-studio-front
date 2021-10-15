import React from 'react';
import ProjectConfigNavOptionContentContainer from './ProjectConfigNavOptionContentContainer';

const ProjectConfigNav = () => {
	return (
		<div className="hd-section">
			<div className="hd-l">
				<div className="tit">프로젝트 설정</div>
			</div>
			<div className="hd-r">
				<ProjectConfigNavOptionContentContainer />
			</div>
		</div>
	);
};

export default ProjectConfigNav;
