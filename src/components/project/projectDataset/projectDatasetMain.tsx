import { useCallback, useEffect, useState } from 'react';
import { LeftWrapper } from '../projectConfig/projectConfigMain';
import ProjectDatasetViewer from './projectDatasetViewer/projectDatasetViewer';
import ProjectDatasetSideBar from './projectDatsetSideBar/projectDatasetSideBar';
import { Dataset } from '../../../API/Dataset/type';
import { DatasetConfig } from './datasetConfig';

const ProjectDatasetMain = ({
	selectorItemsHeads,
	setHead,
	library,
}: {
	selectorItemsHeads: Array<DatasetConfig>;
	setHead: any;
	library: Array<Dataset>;
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
				{value === undefined ? null : (
					<ProjectDatasetViewer datasetConfig={value} setHead={setHead} setDatasetConfig={setValue} library={library} />
				)}
			</div>
		</>
	);
};

export default ProjectDatasetMain;
