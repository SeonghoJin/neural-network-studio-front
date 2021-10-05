import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import PrivateAuthentication from '../components/Authentication/PrivateAuthentication';
import Navigation from '../components/nav';
import icoSorting1 from '../static/img/ico_sorting1.png';
import { QueryPath, StaticPath } from '../components/PagePathConsts';
import { isGetDataSetListQuery, useDataSetStoreQuery } from '../hooks/useDataSetStoreQuery';
import { getDatasetListAPI } from '../API/Dataset';

export const DataSetStorePage = () => {
	const queries = useDataSetStoreQuery();

	if (!isGetDataSetListQuery(queries)) {
		return <Redirect to={QueryPath.DATASET_STORE_DEFAULT} />;
	}
	getDatasetListAPI({
		...queries,
	});
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

							<Link to={`${StaticPath.CREATE_DATASET_STORE}`} className="btn-create">
								데이터셋 생성
							</Link>
						</div>
						{/* <ol className="list-project"> */}
						{/*	{(data && <CardGrid projects={data.projects} onUpdateProjectLists={mutate} />) || <CircleLoading />} */}
						{/* </ol> */}
						{/* {item} */}
					</div>
				</section>
				<footer className="footer">Copyright 2021 ⓒ Neural network studio</footer>
			</div>
		</PrivateAuthentication>
	);
};
