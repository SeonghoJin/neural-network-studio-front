import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PrivateAuthentication from '../components/Authentication/PrivateAuthentication';
import Navigation from '../components/nav';
import { StaticPath } from '../components/PagePathConsts';
import icoSorting1 from '../static/img/ico_sorting1.png';
import CardGrid from '../components/dashboard/cardGrid/cardGrid';
import { GetProjectListParams } from '../API/project/types';
import usePageNation from '../components/utils/pagenation/usePageNation';
import useProjectList from '../hooks/useProjectList';
import { CircleLoading } from '../components/utils/Loading/CircularLoading';

export const DashBoard = () => {
	const [projectListParams, setProjectListPrams] = useState(new GetProjectListParams());

	const { data, mutate } = useProjectList({
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
		<PrivateAuthentication>
			<div id="container">
				<Navigation />
				<section className="dashboard">
					<div className="wrap">
						<div className="board-util">
							<div className="search-filter">
								<button type="button" className="btn-sorting">
									<img src={icoSorting1} alt=" " />
								</button>

								<input type="text" placeholder="검색어를 입력하세요" className="inp-search" />
							</div>

							<Link to={`${StaticPath.DASHBOARD_NEW_PROJECT}`} className="btn-create">
								프로젝트 생성
							</Link>
						</div>
						<ol className="list-project">
							{(data && <CardGrid projects={data.projects} onUpdateProjectLists={mutate} />) || <CircleLoading />}
						</ol>
						{item}
					</div>
				</section>
				<footer className="footer">Copyright 2021 ⓒ Neural network studio</footer>
			</div>
		</PrivateAuthentication>
	);
};
