import React, { useEffect, useState } from 'react';
import Card from './card/card';
import style from './cardGrid.module.css';
import usePageNation from '../../utils/pagenation/usePageNation';
import { DEFAULT_PAGE_SIZE, GetProjectListParams } from '../../../API/project/types';
import EmptyCard from './card/emptyCard';
import useDeleteProject from '../../../hooks/useDeleteProject';
import useProjectList from '../../../hooks/useProjectList';

const CardGrid = () => {
	const { errorFeedback, successFeedback, loadingFeedback } = useDeleteProject();
	const [projectListParams, setProjectListPrams] = useState(new GetProjectListParams());
	const { loading, data } = useProjectList({
		params: projectListParams,
	});
	const { item, page } = usePageNation({
		lastPage: data?.pagination.lastPage,
	});

	useEffect(() => {
		setProjectListPrams(
			new GetProjectListParams({
				curPage: page.toString(),
			})
		);
	}, [page]);

	const emptyCards = new Array(DEFAULT_PAGE_SIZE).fill(null).map((value, index, array) => {
		// eslint-disable-next-line react/no-array-index-key
		return <EmptyCard key={`${index}1`} />;
	});

	return (
		<>
			<div className={`${style.grid}`}>
				{data &&
					data.projects.map((project) => (
						<Card
							key={`${project.name} - ${project.projectNo}`}
							title={project.name}
							description={project.description}
							lastUpdate={project.lastModify}
							id={project.projectNo}
						/>
					))}
				{loading && emptyCards}
				{errorFeedback}
				{successFeedback}
				{loadingFeedback}
			</div>
			{item}
		</>
	);
};

export default CardGrid;
