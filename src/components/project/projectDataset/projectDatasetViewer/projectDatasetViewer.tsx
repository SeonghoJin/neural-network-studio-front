import React, { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { atom, useRecoilState } from 'recoil';
import { randomInt } from 'crypto';
import { DatasetConfig } from '../datasetConfig';
import { Dataset, GetDatasetListAPIResponse } from '../../../../API/Dataset/type';
import config from '../../../../config';
import { sleep } from '../../../../util';
import SimpleBackdrop from '../../../utils/BackLoading';
import { CircleLoading } from '../../../utils/Loading/CircularLoading';
import { CustomSelectInput } from '../../../Input/custom/CustomSelectInput';
import SelectInput from '../../../Input/SelectInput';
import { CustomDatasetSelectInput } from '../../../Input/custom/CustomDatasetSelectInput';

export type ProjectDatasetViewerProps = {
	datasetConfig: DatasetConfig;
	setDatasetConfig: any;
	datasetList: GetDatasetListAPIResponse;
};

export const ProjectDatasetViewerTop = ({
	datasetConfig,
	setDatasetConfig,
	datasetList,
}: ProjectDatasetViewerProps) => {
	const onDataChange = useCallback(
		(id, name) => {
			console.log(id, name);
			setDatasetConfig({
				...datasetConfig,
				dataset: {
					id,
					name,
				},
			});
		},
		[datasetConfig, setDatasetConfig]
	);

	const onChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const { name, value } = e.target;

			setDatasetConfig({
				...datasetConfig,
				[name]: value,
			});
		},
		[datasetConfig, setDatasetConfig]
	);

	const onCheck = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const { name, checked } = e.target;

			setDatasetConfig({
				...datasetConfig,
				[name]: checked,
			});
		},
		[datasetConfig, setDatasetConfig]
	);

	const onNormalizationChange = useCallback(
		(e: ChangeEvent<any>) => {
			const { name, value } = e.target;

			setDatasetConfig({
				...datasetConfig,
				normalization: {
					...datasetConfig.normalization,
					[name]: value,
				},
			});
		},
		[datasetConfig, setDatasetConfig]
	);

	const datasetListCandidates = useMemo(() => {
		return datasetList.datasets.map((dataset) => {
			return {
				id: dataset.id,
				name: dataset.name,
			};
		});
	}, [datasetList.datasets]);

	return (
		<>
			<div className="search-filter">
				<CustomDatasetSelectInput
					title="데이터"
					name="id"
					onChange={onDataChange}
					value={{
						id: datasetConfig.dataset.id.toString(),
						name: datasetConfig.dataset.name,
					}}
					propertyCandidates={datasetListCandidates}
				/>
				<ol className="list-filter">
					<li>
						<input
							id="ck1"
							type="checkbox"
							name="shuffle"
							className="ck-custom"
							onChange={onCheck}
							defaultChecked={datasetConfig.shuffle}
						/>
						<label htmlFor="ck1">
							<span className="custom" />
							Shuffle
						</label>
					</li>
					<li>
						<div className="tit">정규화</div>
						<select
							key={datasetConfig.normalization.method}
							className="inp"
							name="method"
							defaultValue={datasetConfig.normalization.method}
							onChange={onNormalizationChange}
						>
							<option value="MinMax">MinMax</option>
							<option value="Standard">Standard</option>
							<option value="Image">Image</option>
						</select>
					</li>

					<li>
						<div className="tit">레이블</div>
						<input type="text" className="inp" name="label" value={datasetConfig.label} onChange={onChange} />
					</li>
				</ol>
			</div>
		</>
	);
};

export type TDatasetPreview = {
	feature: string[];

	rows: Array<string[]>;

	datasetNum: number;

	featureNum: number;
};

export interface IDatasetPreview {
	feature: string[];

	rows: Array<string[]>;

	datasetNum: number;

	featureNum: number;
}

export class DatasetPreview {
	feature: string[];

	rows: Array<string[]>;

	datasetNum: number;

	featureNum: number;

	constructor(dto: IDatasetPreview) {
		this.feature = dto.feature;
		this.rows = dto.rows;
		this.datasetNum = dto.datasetNum;
		this.featureNum = dto.featureNum;
	}

	static toDatasetPreviewDto(datasetPreview: DatasetPreview) {
		const datasetPreviewDto: IDatasetPreview = {
			feature: datasetPreview.feature,
			rows: datasetPreview.rows,
			datasetNum: datasetPreview.datasetNum,
			featureNum: datasetPreview.featureNum,
		};

		return datasetPreviewDto;
	}
}

type Props = {
	dataDetail: TDatasetPreview | null;
};

const axiosConfig: AxiosRequestConfig = {
	withCredentials: true,
};

export const GetDatasetDetail = async (datasetId: number) => {
	try {
		const res = await axios.get(`${config.SERVER_PREFIX}/api/dataset/library/${datasetId}`, axiosConfig);

		return res.data;
	} catch (e) {
		if ((e as AxiosError).response?.status !== 200) {
			throw new Error('데이터셋 정보를 가져오는데 실패했습니다. 다시 시도해주세요.');
		}
		throw e;
	}
};

type getDatasetDetailState = {
	error: null | string;
	loading: boolean;
	data: boolean | null;
} | null;

const getDatasetDetailResult = atom<getDatasetDetailState>({
	key: 'getDatasetDetailState',
	default: null,
});

export const useGetDatasetDetail = () => {
	const [result, setResult] = useRecoilState(getDatasetDetailResult);
	const fetch = useCallback(
		async (datasetId: number) => {
			setResult({
				error: null,
				data: null,
				loading: true,
			});

			try {
				const delayedData = await sleep(1000).then(async () => {
					const data = await GetDatasetDetail(datasetId);
					setResult({
						data: data || true,
						error: null,
						loading: false,
					});
					return data;
				});
				return delayedData;
			} catch (e: AxiosError | any) {
				setResult({
					data: null,
					loading: false,
					error: e.message,
				});
				throw e;
			}
		},
		[setResult]
	);

	return {
		...result,
		fetch,
		loadingFallback: <SimpleBackdrop open />,
	};
};

export const DatasetPreviewTableRow = ({ dataDetail }: Props) => {
	return (
		<>
			{dataDetail?.rows.map((row, index) => {
				return (
					// eslint-disable-next-line react/no-array-index-key
					<tr key={index}>
						<td>
							<div className="content">
								<div className="txt-group">
									<div className="txt">{index}</div>
								</div>
							</div>
						</td>
						{row.map((col, idx) => {
							return (
								// eslint-disable-next-line react/no-array-index-key
								<td key={idx}>
									<div className="content">
										<div className="txt-group">
											<div className="txt">{col}</div>
										</div>
									</div>
								</td>
							);
						})}
					</tr>
				);
			})}
		</>
	);
};

export const DatasetPreviewTable = ({ dataDetail }: Props) => {
	return (
		<>
			<table className="tbl">
				<tbody>
					<tr>
						<th>
							<div className="content">
								<div className="txt-group">
									<div className="tit">#</div>
									<div className="txt">Index</div>
								</div>
							</div>
						</th>
						{dataDetail?.feature.map((feat, index) => {
							return (
								// eslint-disable-next-line react/no-array-index-key
								<th key={index}>
									<div className="content">
										<div className="txt-group">
											<div className="tit">{feat}</div>
											<div className="txt">feat</div>
										</div>
									</div>
								</th>
							);
						})}
					</tr>
					{/* <tr> */}
					{/*	<td> */}
					{/*		<div className="content" /> */}
					{/*	</td> */}

					{/*	<td> */}
					{/*		<div className="content" /> */}
					{/*	</td> */}

					{/*	<td> */}
					{/*		<div className="content"> */}
					{/*			<div className="txt-group2"> */}
					{/*				<div className="txt1">148</div> */}
					{/*				<div className="txt2">Unique Values</div> */}
					{/*			</div> */}
					{/*		</div> */}
					{/*	</td> */}

					{/*	<td> */}
					{/*		<div className="content" /> */}
					{/*	</td> */}

					{/*	<td> */}
					{/*		<div className="content"> */}
					{/*			<div className="txt-group2"> */}
					{/*				<div className="txt1">148</div> */}
					{/*				<div className="txt2">Unique Values</div> */}
					{/*			</div> */}
					{/*		</div> */}
					{/*	</td> */}

					{/*	<td> */}
					{/*		<div className="content"> */}
					{/*			<div className="txt-group2"> */}
					{/*				<div className="txt1">148</div> */}
					{/*				<div className="txt2">Unique Values</div> */}
					{/*			</div> */}
					{/*		</div> */}
					{/*	</td> */}

					{/*	<td> */}
					{/*		<div className="content"> */}
					{/*			<div className="txt-group2"> */}
					{/*				<div className="txt1">148</div> */}
					{/*				<div className="txt2">Unique Values</div> */}
					{/*			</div> */}
					{/*		</div> */}
					{/*	</td> */}

					{/*	<td> */}
					{/*		<div className="content"> */}
					{/*			<div className="txt-group2"> */}
					{/*				<div className="txt1">148</div> */}
					{/*				<div className="txt2">Unique Values</div> */}
					{/*			</div> */}
					{/*		</div> */}
					{/*	</td> */}

					{/*	<td> */}
					{/*		<div className="content"> */}
					{/*			<div className="txt-group2"> */}
					{/*				<div className="txt1">148</div> */}
					{/*				<div className="txt2">Unique Values</div> */}
					{/*			</div> */}
					{/*		</div> */}
					{/*	</td> */}
					{/* </tr> */}
					<DatasetPreviewTableRow dataDetail={dataDetail} />
				</tbody>
			</table>
		</>
	);
};

export const MemoizedDatasetTable = React.memo(DatasetPreviewTable);

const ProjectDatasetViewer = ({ datasetConfig, setDatasetConfig, datasetList }: ProjectDatasetViewerProps) => {
	const { fetch, loading } = useGetDatasetDetail();
	const [datasetDetail, setDatasetDetail] = useState<DatasetPreview | null>();
	console.log(datasetDetail);
	useEffect(() => {
		if (datasetConfig.dataset.id !== -1) {
			fetch(datasetConfig.dataset.id).then((res) => {
				setDatasetDetail(res);
			});
		} else {
			setDatasetDetail(null);
		}
	}, [fetch, datasetConfig.dataset.id]);

	return (
		<>
			<div className="board-util">
				<ProjectDatasetViewerTop
					datasetConfig={datasetConfig}
					setDatasetConfig={setDatasetConfig}
					datasetList={datasetList}
				/>
			</div>
			{!loading && datasetDetail && <MemoizedDatasetTable dataDetail={datasetDetail} />}
			{loading && <CircleLoading />}
		</>
	);
};

export default ProjectDatasetViewer;
