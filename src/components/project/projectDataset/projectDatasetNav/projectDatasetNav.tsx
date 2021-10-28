import React from 'react';
import ProjectDatasetNavOptionContentContainer from './projectDatasetNavOptionContentContainer';
import { DatasetConfig } from '../types';

type Props = {
	currentDatasetConfig: undefined | DatasetConfig;
};

const ProjectDatasetNav = ({ currentDatasetConfig }: Props) => {
	return (
		<div className="hd-section">
			<div className="hd-l">
				<div className="tit">데이터셋 설정</div>
			</div>
			<div className="hd-r">
				<ProjectDatasetNavOptionContentContainer currentDatasetConfig={currentDatasetConfig} />
			</div>
		</div>
	);
};

export default ProjectDatasetNav;
