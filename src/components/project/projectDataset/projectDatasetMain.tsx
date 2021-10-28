import { useCallback, useState } from 'react';
import { LeftWrapper } from '../projectConfig/projectConfigMain';
import ProjectDatasetViewer from './projectDatasetViewer/projectDatasetViewer';
import ProjectDatasetSideBar from './projectDatsetSideBar/projectDatasetSideBar';
import { DatasetConfig } from './datasetConfig';

type Props = {
	datasetConfigs: DatasetConfig[];
	currentDatasetConfig: DatasetConfig | undefined;
	setCurrentDatasetConfig: (datasetConfig: DatasetConfig) => any;
};

const ProjectDatasetMain = ({ currentDatasetConfig, setCurrentDatasetConfig, datasetConfigs }: Props) => {
	const addPage = useCallback(() => {}, []);

	return (
		<>
			<LeftWrapper>
				<div className="sec-l">
					<ProjectDatasetSideBar
						datasetConfigs={datasetConfigs}
						setCurrentDatasetConfig={setCurrentDatasetConfig}
						currentDatasetConfig={currentDatasetConfig}
						addPage={addPage}
					/>
				</div>
			</LeftWrapper>

			<div className="sec-c">
				{currentDatasetConfig === undefined ? null : (
					<ProjectDatasetViewer datasetConfig={currentDatasetConfig} setDatasetConfig={setCurrentDatasetConfig} />
				)}
			</div>
		</>
	);
};

export default ProjectDatasetMain;
