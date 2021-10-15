import React, { useCallback, useEffect, useState } from 'react';
import { LoadingButton } from '@mui/lab';
import styled from 'styled-components';
import { useGetDatasetListLibraryAPI } from '../hooks/useGetDatasetListLibraryAPI';
import ProjectNav from '../components/project/ProjectNav/projectNav';
import { LeftWrapper } from '../components/project/projectConfig/projectConfigMain';
import { Dataset } from '../API/Dataset/type';

const LoadingButtonWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ProjectDatasetPage = () => {
	const { loading, fetch } = useGetDatasetListLibraryAPI();
	const [curPage, setCurPage] = useState(1);
	const [pageSize, setPageSize] = useState(5);
	const [datasets, setDatasets] = useState<Dataset[]>(new Array<Dataset>(0));
	const [lastPage, setLastPage] = useState<null | number>(null);

	useEffect(() => {
		if (lastPage === null) {
			fetch(curPage, pageSize).then((res) => {
				setLastPage(res.pagination.lastPage);
				setDatasets(res.datasets);
			});
		}
	}, [curPage, fetch, lastPage, pageSize]);

	const addPage = useCallback(() => {
		if (curPage === lastPage) {
			return;
		}

		fetch(curPage + 1, pageSize).then((res) => {
			setDatasets((prev) => {
				return prev.concat(res.datasets);
			});
		});

		setCurPage(curPage + 1);
	}, [curPage, fetch, lastPage, pageSize]);

	return (
		<div id="container">
			<ProjectNav currentMenu={4} />
			<section className="modelset">
				<div className="hd-section">
					<div className="hd-l">
						<div className="tit">데이터셋 설정</div>
					</div>
				</div>
				<div className="sec-container">
					<LeftWrapper>
						<div className="sec-l">
							<ol className="sec-menu">
								{datasets.map((dataset) => {
									return (
										<li key={dataset.id}>
											<div className="tit">{dataset.name}</div>
										</li>
									);
								})}
							</ol>
							<LoadingButtonWrapper>
								<LoadingButton
									style={{
										width: '40px',
										height: '40px',
										padding: 0,
										borderRadius: '50%',
										minWidth: 0,
										margin: '20px',
									}}
									loading={loading}
									variant="outlined"
									onClick={addPage}
									disabled={curPage === lastPage}
								>
									+
								</LoadingButton>
							</LoadingButtonWrapper>
						</div>
					</LeftWrapper>
				</div>
			</section>
		</div>
	);
};
