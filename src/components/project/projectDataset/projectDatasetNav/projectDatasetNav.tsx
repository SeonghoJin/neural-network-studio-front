import React from 'react';
import ProjectDatasetNavOptionContentContainer from './projectDatasetNavOptionContentContainer';
import { DatasetConfig } from '../types';

type Props = {
	currentDatasetConfig: undefined | DatasetConfig;
	setCurrentDatasetConfig: any;
	mutate: any;
};

const ProjectDatasetNav = ({ currentDatasetConfig, setCurrentDatasetConfig, mutate }: Props) => {
	return (
		<div className="hd-section">
			<div className="hd-l">
				<div className="tit">데이터셋 설정</div>
			</div>
			<div className="hd-r">
				<ProjectDatasetNavOptionContentContainer
					setCurrentDatasetConfig={setCurrentDatasetConfig}
					currentDatasetConfig={currentDatasetConfig}
					mutate={mutate}
				/>
			</div>
		</div>
	);
};

export default ProjectDatasetNav;
