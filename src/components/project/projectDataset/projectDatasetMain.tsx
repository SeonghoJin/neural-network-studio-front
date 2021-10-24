import { useCallback, useEffect, useState } from 'react';
import { DatasetConfig } from './datasetConfig';
import { LeftWrapper } from '../projectConfig/projectConfigMain';
import ProjectDatasetViewer from './projectDatasetViewer/projectDatasetViewer';
import ProjectDatasetSideBar from './projectDatsetSideBar/projectDatasetSideBar';

const ProjectDatasetMain = ({
	selectorItemsHeads,
	setHead,
}: {
	selectorItemsHeads: Array<DatasetConfig>;
	setHead: any;
}) => {
	const [value, setValue] = useState<DatasetConfig>(selectorItemsHeads[0]);

	const addPage = useCallback(() => {
		console.log('do something');
	}, []);

	return (
		<>
			<LeftWrapper>
				<div className="sec-l">
					<ProjectDatasetSideBar
						value={value}
						setValue={setValue}
						setHead={setHead}
						selectorItemHeads={selectorItemsHeads}
						addPage={addPage}
					/>
				</div>
			</LeftWrapper>

			<div className="sec-c">
				<ProjectDatasetViewer datasetConfig={value} setHead={setHead} setDatasetConfig={setValue} />
			</div>
		</>
	);
};

export default ProjectDatasetMain;
