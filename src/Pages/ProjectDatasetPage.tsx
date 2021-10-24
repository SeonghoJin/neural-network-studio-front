import React, { useCallback, useEffect, useState } from 'react';
import { LoadingButton } from '@mui/lab';
import styled from 'styled-components';
import { useGetDatasetListLibraryAPI } from '../hooks/useGetDatasetListLibraryAPI';
import ProjectNav from '../components/project/ProjectNav/projectNav';
import { LeftWrapper } from '../components/project/projectConfig/projectConfigMain';
import { Dataset } from '../API/Dataset/type';
import ProjectDatasetNav from '../components/project/projectDataset/projectDatasetNav/projectDatasetNav';
import useProjectLocation from '../hooks/useProjectLocation';
import { useGetDatasetConfigList } from '../components/project/projectDataset/apis';
import ProjectDatasetMain from '../components/project/projectDataset/projectDatasetMain';
import { DatasetConfig, DatasetConfigs } from '../components/project/projectDataset/types';

const LoadingButtonWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ProjectDatasetPage = () => {
	const { loading, fetch } = useGetDatasetListLibraryAPI();
	const [curPage, setCurPage] = useState(1);
	const [pageSize, setPageSize] = useState(5);
	const [datasets, setDatasets] = useState<DatasetConfig[]>(new Array<DatasetConfig>(0));
	const [lastPage, setLastPage] = useState<null | number>(null);

	const { projectNo } = useProjectLocation();
	const { data, mutate } = useGetDatasetConfigList(projectNo);

	const [head, setHead] = useState<DatasetConfig>();

	useEffect(() => {
		if (lastPage === null) {
			fetch(curPage, pageSize).then((res) => {
				setLastPage(res.pagination.lastPage);
			});
		}
	}, [data, curPage, fetch, lastPage, pageSize]);

	// const addPage = useCallback(() => {
	// 	if (curPage === lastPage) {
	// 		return;
	// 	}
	//
	// 	fetch(curPage + 1, pageSize).then((res) => {
	// 		setDatasets((prev) => {
	// 			return prev.concat(data.datasetConfigs);
	// 		});
	// 	});
	//
	// 	setCurPage(curPage + 1);
	// }, [curPage, fetch, lastPage, pageSize]);

	return (
		<div id="container">
			<ProjectNav currentMenu={4} />
			<section className="dataset">
				<ProjectDatasetNav value={head} setValue={setHead} />
				<div className="sec-container">
					{data && <ProjectDatasetMain setHead={setHead} selectorItemsHeads={data.datasetConfigs} />}
				</div>
			</section>
		</div>
	);
};
