import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { atom, useRecoilState } from 'recoil';
import { randomInt } from 'crypto';
import { DatasetConfig } from '../datasetConfig';
import { Dataset } from '../../../../API/Dataset/type';
import config from '../../../../config';
import { sleep } from '../../../../util';
import SimpleBackdrop from '../../../utils/BackLoading';

export type ProjectDatasetViewerProps = {
	datasetConfig: DatasetConfig;
	setDatasetConfig: any;
	setHead: any;
	library: Array<Dataset>;
};

export const ProjectDatasetViewerTop = ({
	datasetConfig,
	setDatasetConfig,
	setHead,
	library,
}: ProjectDatasetViewerProps) => {
	const onDataChange = useCallback(
		(e: ChangeEvent<HTMLSelectElement>) => {
			const { name, value } = e.target;

			let dataName = '';
			for (let i = 0; i < library.length; i += 1) {
				// eslint-disable-next-line eqeqeq
				if (library[i].id == value) {
					dataName = library[i].name;
					break;
				}
			}

			setDatasetConfig({
				...datasetConfig,
				dataset: {
					[name]: value,
					name: dataName,
				},
			});
			setHead(datasetConfig);
		},
		[library, datasetConfig, setDatasetConfig, setHead]
	);

	const onChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const { name, value } = e.target;

			setDatasetConfig({
				...datasetConfig,
				[name]: value,
			});
			setHead(datasetConfig);
		},
		[datasetConfig, setDatasetConfig, setHead]
	);

	const onCheck = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const { name, checked } = e.target;

			setDatasetConfig({
				...datasetConfig,
				[name]: checked,
			});
			setHead(datasetConfig);
		},
		[datasetConfig, setDatasetConfig, setHead]
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
			setHead(datasetConfig);
		},
		[datasetConfig, setDatasetConfig, setHead]
	);

	return (
		<>
			<div className="search-filter">
				<div className="tit">데이터</div>
				<select className="inp" name="id" defaultValue={datasetConfig.dataset.id} onChange={onDataChange}>
					{library.map((dataset, index) => {
						return (
							<option key={dataset.id} value={dataset.id}>
								{dataset.name}
							</option>
						);
					})}
				</select>

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

const generateKey = (pre: any) => {
	return `${pre}_${new Date().getTime()}}`;
};

export const DatasetPreviewTableRow = ({ dataDetail }: Props) => {
	return (
		<>
			{dataDetail?.rows.map((row, index) => {
				return (
					// eslint-disable-next-line react/no-array-index-key
					<tr key={generateKey(row[0]) + row[0] + index}>
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
								<td key={generateKey(col) + col + idx}>
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
								<th key={generateKey(feat) + feat + index}>
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

const ProjectDatasetViewer = ({ datasetConfig, setDatasetConfig, setHead, library }: ProjectDatasetViewerProps) => {
	const { fetch, loading } = useGetDatasetDetail();
	const [datasetDetail, setDatasetDetail] = useState<DatasetPreview>();

	useEffect(() => {
		fetch(datasetConfig.dataset.id).then((res) => {
			setDatasetDetail(res);
		});
	}, [fetch, datasetConfig]);

	console.log(datasetDetail);

	return (
		<>
			<div className="board-util">
				<ProjectDatasetViewerTop
					datasetConfig={datasetConfig}
					setHead={setHead}
					setDatasetConfig={setDatasetConfig}
					library={library}
				/>
			</div>
			<DatasetPreviewTable dataDetail={datasetDetail !== undefined ? datasetDetail : null} />
		</>
	);
};

export default ProjectDatasetViewer;
