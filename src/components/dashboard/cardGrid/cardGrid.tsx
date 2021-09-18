import React, { useEffect, useState } from 'react';
import Card from './card/card';
import usePageNation from '../../utils/pagenation/usePageNation';
import { GetProjectListParams } from '../../../API/project/types';
import useProjectList from '../../../hooks/useProjectList';

const CardGrid = () => {
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

	return (
		<>
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
			{item}
		</>
	);
};

export default CardGrid;
