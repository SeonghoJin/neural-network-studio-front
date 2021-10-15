import { atom, useRecoilState } from 'recoil';
import { useCallback } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { IProjectContentDto } from '../../../API/project/types';
import { sleep } from '../../../util';
import { updateProjectContent } from '../../../API/project';
import SimpleBackdrop from '../../utils/BackLoading';
import { Dataset } from '../../../API/Dataset/type';
import config from '../../../config';

type TrainResult = {
	data: null | any;
	error: null | string;
	loading: boolean;
} | null;

const trainResultState = atom<TrainResult>({
	key: 'trainResultState',
	default: null,
});

export type NormalizationConfig = {
	usage: boolean;
	method: string;
};

export type DatasetConfig = {
	trainUrl: string;
	validateUrl: string;
	shuffle: boolean;
	label: string;
	normalization: NormalizationConfig;
};

const axiosConfig: AxiosRequestConfig = {
	withCredentials: true,
};

export const trainProject = async (projectNo: string) => {
	try {
		const response = await axios.post(`${config.SERVER_PREFIX}/api/project/${projectNo}/train`, axiosConfig);
		return response.data;
	} catch (e: any) {
		throw new Error(e.message);
	}
};

const testData: DatasetConfig = {
	trainUrl:
		'https://s3.ap-northeast-2.amazonaws.com/dataset.nns/2021/09/03/76edd207-f00c-4280-a548-1242147bf6b6.plain%3B+charset%3Dutf-8',
	validateUrl: '',
	shuffle: true,
	label: 'blueWin',
	normalization: {
		usage: false,
		method: '',
	},
};

export const useTrain = () => {
	const [result, setResult] = useRecoilState(trainResultState);
	const fetch = useCallback(
		async (projectNo: string, projectContent: IProjectContentDto) => {
			setResult({
				data: null,
				error: null,
				loading: true,
			});

			const delayedData = await sleep(1000).then(() => {
				const res = updateProjectContent(projectNo, projectContent)
					.then(async () => {
						const trainRequestRes = await trainProject(projectNo);
						setResult({
							error: null,
							data: trainRequestRes,
							loading: false,
						});
						return trainRequestRes;
					})
					.catch((e: Error) => {
						setResult({
							error: e.message,
							data: null,
							loading: false,
						});
						throw e;
					});
				return res;
			});

			return delayedData;
		},
		[setResult]
	);

	return {
		...result,
		loadingFallback: <SimpleBackdrop open />,
		fetch,
	};
};
