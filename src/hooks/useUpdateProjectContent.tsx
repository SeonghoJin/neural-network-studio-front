import { useCallback, useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';
import { AxiosError } from 'axios';
import StandardModal from '../components/utils/modal/StandardModal';
import { updateProjectContent } from '../API/project';
import { IProjectContentDto } from '../API/project/types';

type PutProjectContentResultState = {
	error: null | AxiosError;
	loading: boolean;
	data: boolean | null;
} | null;

const updateProjectRequestResult = atom<PutProjectContentResultState>({
	key: 'updateProjectRequestResult',
	default: null,
});

const useUpdateProjectContent = () => {
	const [result, setResult] = useRecoilState(updateProjectRequestResult);
	const fetch = useCallback(
		async (projectNo: string, projectContent: IProjectContentDto) => {
			setResult({
				error: null,
				data: null,
				loading: true,
			});
			try {
				const response = await updateProjectContent(projectNo, projectContent);
				setResult({
					loading: false,
					error: null,
					data: response || true,
				});
				return { projectNo, projectContent };
			} catch (e) {
				setResult({
					data: null,
					loading: false,
					error: e,
				});
				return null;
			}
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
		errorFeedback: result?.error && <StandardModal head="error" body={result?.error.name} />,
		successFeedback: useCallback(
			(onCloseSuccessFeedback?) => {
				return (
					result?.data && (
						<StandardModal
							head="저장을 완료했습니다"
							onClose={() => {
								if (onCloseSuccessFeedback) {
									onCloseSuccessFeedback();
								}
							}}
						/>
					)
				);
			},
			[result?.data]
		),
	};
};

useUpdateProjectContent.defaultProps = {
	onCloseSuccessFeedback: null,
};

useUpdateProjectContent.defaultProps = {};

export default useUpdateProjectContent;
