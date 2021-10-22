import React from 'react';
import ProjectDatasetNavOptionContentContainer from './projectDatasetNavOptionContentContainer';

type Props = {
	value: any;
	setValue: any;
};

const ProjectDatasetNav = ({ value, setValue }: Props) => {
	return (
		<div className="hd-section">
			<div className="hd-l">
				<div className="tit">데이터셋 설정</div>
			</div>
			<div className="hd-r">
				<ProjectDatasetNavOptionContentContainer value={value} setValue={setValue} />
			</div>
		</div>
	);
};

export default ProjectDatasetNav;
