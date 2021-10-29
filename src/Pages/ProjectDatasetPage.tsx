import React, { useEffect, useState } from 'react';
import ProjectNav from '../components/project/ProjectNav/projectNav';
import ProjectDatasetNav from '../components/project/projectDataset/projectDatasetNav/projectDatasetNav';
import ProjectDatasetMain from '../components/project/projectDataset/projectDatasetMain';
import { DatasetConfig } from '../components/project/projectDataset/datasetConfig';
import { useDatasetConfigList } from '../hooks/useGetDatasetConfigList';
import { CircleLoading } from '../components/utils/Loading/CircularLoading';
import { useGetDatasetListLibraryAPI } from '../hooks/useGetDatasetListLibraryAPI';

export const ProjectDatasetPage = () => {
	const { datasetConfigList, setDatasetConfigList, loading, mutate } = useDatasetConfigList();
	const [currentDatasetConfig, setCurrentDatasetConfig] = useState<DatasetConfig | undefined>();
	const { data: datasetList } = useGetDatasetListLibraryAPI();

	useEffect(() => {
		if (datasetConfigList != null && datasetConfigList[0] != null && currentDatasetConfig == null) {
			setCurrentDatasetConfig(datasetConfigList[0]);
		}
	}, [currentDatasetConfig, datasetConfigList]);

	return (
		<div id="container">
			<ProjectNav currentMenu={4} />
			<section className="dataset">
				<ProjectDatasetNav currentDatasetConfig={currentDatasetConfig} mutate={mutate} />
				{loading && <CircleLoading />}
				<div className="sec-container">
					{datasetConfigList && datasetList && (
						<ProjectDatasetMain
							datasetList={datasetList}
							datasetConfigs={datasetConfigList}
							setDatasetConfigs={setDatasetConfigList}
							currentDatasetConfig={currentDatasetConfig}
							setCurrentDatasetConfig={setCurrentDatasetConfig}
							mutate={mutate}
						/>
					)}
				</div>
			</section>
		</div>
	);
};
