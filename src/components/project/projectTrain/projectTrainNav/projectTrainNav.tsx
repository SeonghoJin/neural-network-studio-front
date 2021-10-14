import React from 'react';
import ProjectTrainNavOptionContentContainer from './projectTrainNavOptionContentContainer';

const ProjectTrainNav = () => {
	return (
		<div className="hd-section">
			<div className="hd-l">
				<div className="tit">학습기록</div>
			</div>
			<div className="hd-r">
				<ProjectTrainNavOptionContentContainer />
			</div>
		</div>
	);
};

export default ProjectTrainNav;
