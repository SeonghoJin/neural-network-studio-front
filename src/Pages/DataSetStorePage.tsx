import React, { useCallback, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import queryString from 'querystring';
import { Divider, List, ListItem, ListItemText, Typography, Toolbar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useSnackbar } from 'notistack';
import PrivateAuthentication from '../components/Authentication/PrivateAuthentication';
import Navigation from '../components/nav';
import { StaticPath } from '../components/PagePathConsts';
import { useDataSetStoreQuery } from '../hooks/useDataSetStoreQuery';
import useGetDatasetList from '../hooks/useGetDatasetList';
import usePageNation from '../components/utils/pagenation/usePageNation';
import { CircleLoading } from '../components/utils/Loading/CircularLoading';
import { DatasetCards } from '../components/datasetStore/DataSetCards';
import { useGetDatasetListLibraryAPI } from '../hooks/useGetDatasetListLibraryAPI';
import { useDeleteDatasetFromLibrary } from '../hooks/useDeleteDatasetFromLibrary';

export const DataSetStorePage = () => {
	const queries = useDataSetStoreQuery();
	const { data, loading, mutate } = useGetDatasetList({ params: queries });
	const { item, page } = usePageNation({ lastPage: data?.pagination.lastPage });
	const datasetListLibrary = useGetDatasetListLibraryAPI();
	const deleteDatasetFromLibraryResult = useDeleteDatasetFromLibrary();
	const history = useHistory();
	const { enqueueSnackbar } = useSnackbar();

	useEffect(() => {
		queries.curPage = page;
		history.push(`${StaticPath.DATASET_STORE}?${queryString.stringify(queries)}`);
	}, [history, page, queries]);

	const deleteDatasetFromLibrary = useCallback(
		async (datasetId) => {
			await deleteDatasetFromLibraryResult
				.fetch(datasetId)
				.then(() => {
					enqueueSnackbar('데이터셋을 라이브러리에서 삭제했습니다.', { variant: 'success' });
					mutate();
					datasetListLibrary.mutate();
				})
				.catch((e) => {
					enqueueSnackbar(e.message, { variant: 'error' });
				});
		},
		[datasetListLibrary, deleteDatasetFromLibraryResult, enqueueSnackbar, mutate]
	);

	return (
		<PrivateAuthentication>
			<div id="container">
				<Navigation currentMenu={3} />
				<section className="dashboard">
					<div
						className="wrap"
						style={{
							display: 'flex',
							flexDirection: 'row',
						}}
					>
						<div
							style={{
								width: 300,
								height: '100%',
								backgroundColor: 'white',
								borderRadius: '10px',
								boxShadow: '0px 0px 3px rgb(0 0 0 / 10%)',
								maxHeight: '500px',
								position: 'sticky',
								overflow: 'auto',
								marginTop: 78,
								right: 0,
								top: 78,
							}}
						>
							<Toolbar>
								<Typography variant="h6" noWrap component="div">
									라이브러리
								</Typography>
							</Toolbar>
							<Divider />
							<List
								style={{
									margin: '10px',
								}}
							>
								{datasetListLibrary.data?.datasets.map((dataset) => {
									return (
										<ListItem
											key={dataset.id}
											style={{
												width: '100%',
												marginTop: '10px',
												padding: '10px 20px 10px 20px',
												borderRadius: '10px',
												display: 'flex',
												flexDirection: 'row',
												alignItems: 'center',
												justifyContent: 'center',
												boxShadow: '0px 0px 5px rgb(0 0 0 / 30%)',
											}}
										>
											<ListItemText
												style={{
													width: '80%',
												}}
											>
												{dataset.name}
											</ListItemText>
											<Button
												variant="text"
												color="secondary"
												style={{
													height: '20px',
													width: '40px',
													padding: '5px',
													minWidth: '0px',
													alignSelf: 'center',
												}}
												onClick={() => {
													if (window.confirm('이 데이터셋을 라이브러리에서 삭제하시겠습니까?')) {
														deleteDatasetFromLibrary(dataset.id);
													}
												}}
											>
												삭제
											</Button>
										</ListItem>
									);
								}) || <CircleLoading />}
							</List>
						</div>
						<div
							style={{
								flex: 1,
							}}
						>
							<div className="board-util">
								<div className="search-filter" />
								<Link to={`${StaticPath.CREATE_DATASET_STORE}`} className="btn-create">
									데이터셋 생성
								</Link>
							</div>
							{loading && <CircleLoading />}
							<ol className="list-project">
								{data && (
									<DatasetCards
										datasets={data.datasets}
										updateDatasets={mutate}
										updateDatasetFromLibrary={datasetListLibrary.mutate}
									/>
								)}
							</ol>
							<div>{item}</div>
						</div>
					</div>
				</section>
				<footer className="footer">Copyright 2021 ⓒ Neural network studio</footer>
			</div>
		</PrivateAuthentication>
	);
};
