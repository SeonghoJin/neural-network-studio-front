import { atom, useRecoilState } from 'recoil';
import { useCallback, useEffect } from 'react';
import { AxiosError } from 'axios';
import { Button, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { createProject } from '../API/project';
import { IProjectInfo } from '../API/project/types';
import StandardModal from '../components/utils/modal/StandardModal';
import { sleep } from '../util';

const useStyle = makeStyles({
	successFeedBackButtonGroup: {
		display: 'flex',
		marginTop: 30,
		justifyContent: 'flex-end',
	},
	successFeedBackButton: {
		margin: 5,
	},
});

type CreateProjectResult = {
	error: null | AxiosError;
	data: null | { projectNo: string };
	loading: boolean;
} | null;

const createProjectResultState = atom<CreateProjectResult>({
	key: 'createProjectResultState',
	default: null,
});

const useCreateProject = () => {
	const classes = useStyle();
	const history = useHistory();
	const [result, setResult] = useRecoilState(createProjectResultState);

	const fetch = useCallback(
		async (projectInfo: IProjectInfo) => {
			setResult({
				error: null,
				data: null,
				loading: true,
			});

			const state = await sleep(500).then(async () => {
				try {
					const data = await createProject(projectInfo);
					setResult({
						error: null,
						data,
						loading: false,
					});
					return true;
				} catch (e) {
					setResult({
						error: e,
						data: null,
						loading: false,
					});
					return false;
				}
			});

			return state;
		},
		[setResult]
	);

	useEffect(() => {
		return () => {
			setResult(null);
		};
	}, [setResult]);

	return {
		...result,
		fetch,
		successFeedback: result?.data && (
			<StandardModal
				head="프로젝트 생성 완료되었습니다."
				body={
					<div className={classes.successFeedBackButtonGroup}>
						<Button
							onClick={() => {
								history.push('/dashboard/projects');
							}}
							className={classes.successFeedBackButton}
							color="secondary"
						>
							취소
						</Button>
						<Button
							onClick={() => {
								history.push('/dashboard/projects');
								window.open(`/project/${result.data?.projectNo}`);
							}}
							className={classes.successFeedBackButton}
							color="primary"
						>
							시작
						</Button>
					</div>
				}
				onClose={() => {
					history.push('/dashboard/projects');
				}}
			/>
		),
		errorFeedback: result?.error && (
			<StandardModal
				head={result.error.response?.status === 422 ? '이미 존재하는 프로젝트 이름입니다.' : result?.error.name}
			/>
		),
		loadingFeedback: result?.loading && <StandardModal head="프로젝트 생성중입니다. 잠시만 기다려주세요." />,
	};
};

export default useCreateProject;
