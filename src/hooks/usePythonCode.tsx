import { useCallback } from 'react';
import { atom, useRecoilState } from 'recoil';
import { getPythonCode } from '../API/project';

type PythonCodeResult = {
	data: null | Blob;
	error: null | string;
	loading: boolean;
} | null;

const pythonCodeResultState = atom<PythonCodeResult>({
	key: 'pythonCodeResultState',
	default: null,
});

const usePythonCode = () => {
	const [result, setResult] = useRecoilState(pythonCodeResultState);

	const fetch = useCallback(
		async (projectNo: string) => {
			setResult({
				data: null,
				error: null,
				loading: true,
			});
			try {
				const data = await getPythonCode(projectNo);
				setResult({
					data,
					error: null,
					loading: false,
				});
				return true;
			} catch (e) {
				setResult({
					data: null,
					error: e,
					loading: false,
				});
				return false;
			}
		},
		[setResult]
	);

	return {
		...result,
		fetch,
	};
};

export default usePythonCode;
