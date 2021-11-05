import React, { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { atom, useRecoilState } from 'recoil';
import { randomInt } from 'crypto';
import { useSnackbar } from 'notistack';
import { DatasetConfig } from '../datasetConfig';
import { Dataset, GetDatasetListAPIResponse } from '../../../../API/Dataset/type';
import config from '../../../../config';
import { sleep } from '../../../../util';
import SimpleBackdrop from '../../../utils/BackLoading';
import { CircleLoading } from '../../../utils/Loading/CircularLoading';
import { CustomSelectInput } from '../../../Input/custom/CustomSelectInput';
import SelectInput from '../../../Input/SelectInput';
import { CustomDatasetSelectInput } from '../../../Input/custom/CustomDatasetSelectInput';
import { ProjectDatasetViewerTop } from './ProjectDatasetViewTop';
import { MemoizedDatasetTable } from './ProjectDatasetTable';

export type ProjectDatasetViewerProps = {
	datasetConfig: DatasetConfig;
	setDatasetConfig: any;
	datasetList: GetDatasetListAPIResponse;
};

export type TDatasetPreview = {
	feature: string[];

	rows: Array<string[]>;

	datasetNum: number;

	featureNum: number;

	kind: string;
};

export interface IDatasetPreview {
	feature: string[];

	rows: Array<string[]>;

	datasetNum: number;

	featureNum: number;

	kind: string;
}

export class DatasetPreview {
	feature: string[];

	rows: Array<string[]>;

	datasetNum: number;

	featureNum: number;

	kind: string;

	constructor(dto: IDatasetPreview) {
		this.feature = dto.feature;
		this.rows = dto.rows;
		this.datasetNum = dto.datasetNum;
		this.featureNum = dto.featureNum;
		this.kind = dto.kind;
	}

	static toDatasetPreviewDto(datasetPreview: DatasetPreview) {
		const datasetPreviewDto: IDatasetPreview = {
			feature: datasetPreview.feature,
			rows: datasetPreview.rows,
			datasetNum: datasetPreview.datasetNum,
			featureNum: datasetPreview.featureNum,
			kind: datasetPreview.kind,
		};

		return datasetPreviewDto;
	}
}

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
		async (_datasetId: number) => {
			setResult({
				error: null,
				data: null,
				loading: true,
			});

			try {
				const delayedData = await sleep(500).then(async () => {
					const data = await GetDatasetDetail(_datasetId);
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

const ProjectDatasetViewer = ({ datasetConfig, setDatasetConfig, datasetList }: ProjectDatasetViewerProps) => {
	const { fetch, loading } = useGetDatasetDetail();
	const [datasetDetail, setDatasetDetail] = useState<DatasetPreview | null>();
	const { enqueueSnackbar } = useSnackbar();

	useEffect(() => {
		if (datasetConfig.dataset.id !== -1) {
			fetch(datasetConfig.dataset.id)
				.then((res) => {
					setDatasetDetail(res);
				})
				.catch(() => {});
		} else {
			setDatasetDetail(null);
		}
	}, [fetch, datasetConfig.dataset.id, enqueueSnackbar]);

	const features = useMemo(() => {
		return datasetDetail?.feature;
	}, [datasetDetail?.feature]);

	return (
		<>
			<div className="board-util">
				<ProjectDatasetViewerTop
					datasetConfig={datasetConfig}
					setDatasetConfig={setDatasetConfig}
					datasetList={datasetList}
					features={features}
				/>
			</div>
			{!loading && datasetDetail && <MemoizedDatasetTable dataDetail={datasetDetail} />}
			{!loading && !datasetDetail && '존재하지 않은 데이터셋입니다. 데이터셋을 다시 선택해주세요.'}
			{loading && <CircleLoading />}
		</>
	);
};

export default ProjectDatasetViewer;
