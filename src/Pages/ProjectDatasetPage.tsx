import React, { useCallback, useEffect, useState } from 'react';
import ProjectNav from '../components/project/ProjectNav/projectNav';
import ProjectDatasetNav from '../components/project/projectDataset/projectDatasetNav/projectDatasetNav';
import useProjectLocation from '../hooks/useProjectLocation';
import ProjectDatasetMain from '../components/project/projectDataset/projectDatasetMain';
import { DatasetConfig } from '../components/project/projectDataset/datasetConfig';
import { useDatasetConfigList } from '../hooks/useGetDatasetConfigList';
import { CircleLoading } from '../components/utils/Loading/CircularLoading';

export const ProjectDatasetPage = () => {
	const { datasetConfigList, loading } = useDatasetConfigList();
	const [currentDatasetConfig, setCurrentDatasetConfig] = useState<DatasetConfig | undefined>(
		datasetConfigList?.datasetConfigs[0]
	);

	return (
		<div id="container">
			<ProjectNav currentMenu={4} />
			<section className="dataset">
				<ProjectDatasetNav currentDatasetConfig={currentDatasetConfig} />
				{loading && <CircleLoading />}
				<div className="sec-container">
					{datasetConfigList && (
						<ProjectDatasetMain
							datasetConfigs={datasetConfigList.datasetConfigs}
							currentDatasetConfig={currentDatasetConfig}
							setCurrentDatasetConfig={setCurrentDatasetConfig}
						/>
					)}
				</div>
			</section>
		</div>
	);
};
