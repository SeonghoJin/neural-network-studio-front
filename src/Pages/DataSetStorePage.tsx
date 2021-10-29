import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import queryString from 'querystring';
import PrivateAuthentication from '../components/Authentication/PrivateAuthentication';
import Navigation from '../components/nav';
import icoSorting1 from '../static/img/ico_sorting1.png';
import { StaticPath } from '../components/PagePathConsts';
import { useDataSetStoreQuery } from '../hooks/useDataSetStoreQuery';
import useGetDatasetList from '../hooks/useGetDatasetList';
import usePageNation from '../components/utils/pagenation/usePageNation';
import { CircleLoading } from '../components/utils/Loading/CircularLoading';
import { DatasetCards } from '../components/datasetStore/DataSetCards';

export const DataSetStorePage = () => {
	const queries = useDataSetStoreQuery();
	const { data, loading, mutate } = useGetDatasetList({ params: queries });
	const { item, page } = usePageNation({ lastPage: data?.pagination.lastPage });
	const history = useHistory();

	useEffect(() => {
		queries.curPage = page;
		history.push(`${StaticPath.DATASET_STORE}?${queryString.stringify(queries)}`);
	}, [history, page, queries]);

	return (
		<PrivateAuthentication>
			<div id="container">
				<Navigation currentMenu={3} />
				<section className="dashboard">
					<div className="wrap">
						<div className="board-util">
							<div className="search-filter">
								{/* <button type="button" className="btn-sorting"> */}
								{/*	<img src={icoSorting1} alt=" " /> */}
								{/* </button> */}
								{/* <input type="text" placeholder="검색어를 입력하세요" className="inp-search" /> */}
							</div>
							<Link to={`${StaticPath.CREATE_DATASET_STORE}`} className="btn-create">
								데이터셋 생성
							</Link>
						</div>
						{loading && <CircleLoading />}
						<ol className="list-project">
							{data && <DatasetCards datasets={data.datasets} updateDatasets={mutate} />}
						</ol>
						{item}
					</div>
				</section>
				<footer className="footer">Copyright 2021 ⓒ Neural network studio</footer>
			</div>
		</PrivateAuthentication>
	);
};
