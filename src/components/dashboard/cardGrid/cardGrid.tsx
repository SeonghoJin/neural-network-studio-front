import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Card from '../card/card';
import style from './cardGrid.module.css';
import useGetprojectsResult from '../../../hooks/APIResult/project/useGetprojectsResult';
import { getProjectsThunk } from '../../../module/API/project/thunks';
import usePageNation from '../../utils/pagenation/usePageNation';
import { DEFAULT_PAGE_SIZE } from '../../../API/project/types';
import EmptyCard from '../card/emptyCard';

const CardGrid = () => {
	const { loading, data } = useGetprojectsResult();
	const { item, page } = usePageNation({
		lastPage: data?.pagination.lastPage,
		loading,
	});
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(
			getProjectsThunk({
				curPage: page.toString(),
			})
		);
	}, [page, dispatch]);

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
			</div>
			{item}
		</>
	);
};

export default CardGrid;
