import React, { KeyboardEventHandler, useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import NativeSelect from '@material-ui/core/NativeSelect';
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
	const [search, setSearch] = useState<string>('');
	const [filterType, setFilterType] = useState<string>('');
	const { data, mutate } = useProjectList({
		params: projectListParams,
	});

	const { item, page } = usePageNation({
		lastPage: data?.pagination.lastPage,
	});

	const filterTypeLists = useMemo(() => {
		return [
			['제목', 'nameLike'],
			['설명', 'descriptionLike'],
		];
	}, []);

	useEffect(() => {
		setProjectListPrams((getProjectListParams) => ({ ...getProjectListParams, curPage: page.toString() }));
	}, [page]);

	const onKeyDown: KeyboardEventHandler = useCallback(
		(event) => {
			if (event.code === 'Enter') {
				setProjectListPrams((getProjectListParams) => ({
					...getProjectListParams,
					filterString: search,
					filterType,
				}));
			}
		},
		[filterType, search]
	);

	return (
		<PrivateAuthentication>
			<div id="container">
				<Navigation currentMenu={1} />
				<section className="dashboard">
					<div className="wrap">
						<div className="board-util">
							<div className="search-filter">
								<div
									className="inp-search"
									style={{
										display: 'flex',
										justifyContent: 'space-around',
										alignItems: 'center',
									}}
									onKeyPress={onKeyDown}
								>
									<input
										type="text"
										placeholder="검색어를 입력하세요"
										onChange={(e) => {
											setSearch(e.target.value);
										}}
										style={{
											width: '60%',
										}}
									/>
									<div
										style={{
											borderLeft: '1px solid #e4e4e4',
											height: '100%',
										}}
									/>
									<NativeSelect
										id="select"
										style={{
											width: '25%',
											marginLeft: '10px',
											marginTop: '3px',
										}}
										disableUnderline
										onChange={(e) => {
											setFilterType(e.target.value);
										}}
									>
										<option value="" selected>
											기본
										</option>
										{filterTypeLists.map((_filterType) => {
											return <option value={_filterType[1]}>{_filterType[0]}</option>;
										})}
									</NativeSelect>
								</div>
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
