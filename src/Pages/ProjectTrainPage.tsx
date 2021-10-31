import styled from 'styled-components';

import React, { useEffect, useState, FC, useCallback } from 'react';
import ProjectNav from '../components/project/ProjectNav/projectNav';
import ProjectTrainNav from '../components/project/projectTrain/projectTrainNav/projectTrainNav';
import { useGetTrainHistoryListLibraryAPI } from '../components/project/projectTrain/api';
import ProjectTrainMain from '../components/project/projectTrain/projectTrainMain';
import SimpleBackdrop from '../components/utils/BackLoading';
import useProjectLocation from '../hooks/useProjectLocation';

export const ProjectTrainPage = () => {
	const { loading, data, fetch } = useGetTrainHistoryListLibraryAPI();
	const { projectNo } = useProjectLocation();
	const fetchTrainHistory = useCallback(() => {
		fetch(projectNo);
	}, [fetch, projectNo]);
	return (
		<div id="container">
			{loading && <SimpleBackdrop open />}
			<ProjectNav currentMenu={2} />
			<section className="learning">
				<ProjectTrainNav />
				<div className="sec-container">
					{data?.history && <ProjectTrainMain trainHistories={data?.history} fetchTrainHistory={fetchTrainHistory} />}
				</div>
			</section>
		</div>
	);
};
