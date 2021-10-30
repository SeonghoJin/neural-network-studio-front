import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import fileDownload from 'js-file-download';
import { FlowExportObject } from 'react-flow-nns';
import { useSnackbar } from 'notistack';
import { atom, useRecoilState } from 'recoil';
import axios, { AxiosRequestConfig } from 'axios';
import ProjectEditorNavMainContent from './ProjectEditorNavMainContent';
import { RootState } from '../../../../module';
import useProjectLocation from '../../../../hooks/useProjectLocation';
import usePythonCode from '../../../../hooks/usePythonCode';
import config from '../../../../config';
import { IProjectContentDto } from '../../../../API/project/types';
import { sleep } from '../../../../util';
import { updateProjectContent } from '../../../../API/project';
import SimpleBackdrop from '../../../utils/BackLoading';

type TrainModelResult = {
	data: null | Blob;
	error: null | string;
	loading: boolean;
} | null;

const trainModelResultState = atom<TrainModelResult>({
	key: 'pythonCodeResultState',
	default: null,
});

const axiosConfig: AxiosRequestConfig = {
	withCredentials: true,
};

const requsetTrain = async (projectNo: string) => {
	try {
		const res = await axios.post(`${config.SERVER_PREFIX}/api/project/${projectNo}/train`, null, axiosConfig);
		return res.data;
	} catch (e: any) {
		throw new Error(e.message);
	}
};

const useTrainModel = () => {
	const [result, setResult] = useRecoilState(trainModelResultState);
	const trainFetch = useCallback(
		async (projectNo: string, projectContent: IProjectContentDto) => {
			setResult({
				data: null,
				error: null,
				loading: true,
			});

			const delayedData = await sleep(1000).then(() => {
				const res = updateProjectContent(projectNo, projectContent)
					.then(async () => {
						const data = await requsetTrain(projectNo);
						setResult({
							error: null,
							data,
							loading: false,
						});
						return data;
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
		trainFetch,
	};
};

const ProjectEditorNavMainContentContainer = () => {
	const { projectNo } = useProjectLocation();
	const instance = useSelector((state: RootState) => state.reactFlowInstance.instance);
	const { fetch } = usePythonCode();
	const { enqueueSnackbar } = useSnackbar();
	const { trainFetch } = useTrainModel();
	const onGetPythonCode = useCallback(() => {
		(async () => {
			await fetch(projectNo, {
				output: '',
				flowState: instance?.toObject() as FlowExportObject,
			})
				.then(async (res) => {
					if (res != null) {
						fileDownload(res, 'model.py');
						enqueueSnackbar('파이썬 코드를 다운받아주세요.', {
							variant: 'success',
						});
					} else {
						throw new Error('파이썬 코드를 다운받는데 실패했습니다. 다시 시도 해주세요.');
					}
				})
				.catch((err) => {
					enqueueSnackbar(err.message, { variant: 'error' });
				});
		})();
	}, [enqueueSnackbar, fetch, instance, projectNo]);

	const onTrainModel = useCallback(() => {
		(async () => {
			await trainFetch(projectNo, {
				output: '',
				flowState: instance?.toObject() as FlowExportObject,
			})
				.then(async (res) => {
					if (res != null) {
						enqueueSnackbar('학습요청에 성공했습니다.', {
							variant: 'success',
						});
					} else {
						throw new Error('학습요청에 실패했습니다. 다시 시도 해주세요.');
					}
				})
				.catch((err) => {
					enqueueSnackbar(err.message, { variant: 'error' });
				});
		})();
	}, [enqueueSnackbar, trainFetch, instance, projectNo]);

	return (
		<>
			<ProjectEditorNavMainContent onGetPythonCode={onGetPythonCode} onTrainModel={onTrainModel} />
		</>
	);
};

export default ProjectEditorNavMainContentContainer;
