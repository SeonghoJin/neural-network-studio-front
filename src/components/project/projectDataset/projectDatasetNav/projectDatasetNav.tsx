import React from 'react';
import ProjectDatasetNavOptionContentContainer from './projectDatasetNavOptionContentContainer';

const ProjectDatasetNav = () => {
	return (
		<div className="hd-section">
			<div className="hd-l">
				<div className="tit">데이터셋 설정</div>
			</div>
			<div className="hd-r">
				<ProjectDatasetNavOptionContentContainer />
			</div>
		</div>
	);
};

export default ProjectDatasetNav;
