import { useState } from 'react';
import { DatasetConfig } from './datasetConfig';
import { LeftWrapper } from '../projectConfig/projectConfigMain';
import ProjectDatasetViewer from './projectDatasetViewer/projectDatasetViewer';
import ProjectDatasetSideBar from './projectDatsetSideBar/projectDatasetSideBar';

const ProjectDatasetMain = ({ selectorItemsHeads }: { selectorItemsHeads: Array<DatasetConfig> }) => {
	const [value, setValue] = useState<DatasetConfig>(selectorItemsHeads[0]);

	return (
		<>
			<LeftWrapper>
				<div className="sec-l">
					<ProjectDatasetSideBar value={value} setValue={setValue} selectorItemHeads={selectorItemsHeads} />
				</div>
			</LeftWrapper>

			<div className="sec-c">
				<ProjectDatasetViewer datasetConfig={value} />
			</div>
		</>
	);
};

export default ProjectDatasetMain;
