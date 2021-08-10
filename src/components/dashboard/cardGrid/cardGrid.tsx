import React, { useEffect, useState } from 'react';
import Card from '../card/card';
import style from './cardGrid.module.css';
import usePageNation from '../../utils/pagenation/usePageNation';
import { DEFAULT_PAGE_SIZE, GetProjectListParams } from '../../../API/project/types';
import EmptyCard from '../card/emptyCard';
import useDeleteProject from '../../../hooks/useDeleteProject';
import StandardModal from '../../utils/modal/StandardModal';
import SimpleBackdrop from '../../utils/BackLoading';
import useProjectList from '../../../hooks/useProjectList';

const CardGrid = () => {
	const deleteProject = useDeleteProject();
	const [projectListParams, setProjectListPrams] = useState(new GetProjectListParams());
	const { loading, data, mutate } = useProjectList({
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
		mutate();
	}, [page, mutate]);

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
				{deleteProject.data && (
					<StandardModal head="삭제완료했습니다." body="" onClose={() => window.location.reload()} />
				)}
				{deleteProject.loading && <SimpleBackdrop open={deleteProject.loading} />}
				{loading && emptyCards}
			</div>
			{item}
		</>
	);
};

export default CardGrid;
