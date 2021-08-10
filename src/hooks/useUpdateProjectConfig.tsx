import { useSelector } from 'react-redux';
import { atom, useRecoilState } from 'recoil';
import { useCallback } from 'react';
import { RootState } from '../module';
import StandardModal from '../components/utils/modal/StandardModal';
import { updateProjectConfig } from '../API/project';
import { IProjectConfig } from '../API/project/types';

type UpdateProjectConfigState = {
	error: null | string;
	loading: boolean;
	data: boolean | null;
} | null;

const updateProjectConfigResult = atom<UpdateProjectConfigState>({
	key: 'updateProjectConfigResult',
	default: null,
});

const useUpdateProjectConfig = () => {
	const [result, setResult] = useRecoilState(updateProjectConfigResult);

	const fetch = useCallback(
		async (projectNo: string, projectConfig: IProjectConfig) => {
			setResult({
				data: null,
				error: null,
				loading: true,
			});

			try {
				const data = await updateProjectConfig(projectNo, projectConfig);
				setResult({
					data: data || true,
					error: null,
					loading: false,
				});
				return true;
			} catch (e) {
				setResult({
					data: null,
					loading: false,
					error: e,
				});
				return false;
			}
		},
		[setResult]
	);
	return {
		...result,
		fetch,
		errorModal: <StandardModal head="error" body={result?.error} />,
	};
};

export default useUpdateProjectConfig;
