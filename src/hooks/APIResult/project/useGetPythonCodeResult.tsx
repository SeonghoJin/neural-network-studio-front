import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import StandardModal from '../../../components/utils/modal/StandardModal';
import { RootState } from '../../../module';
import { PROJECT_ERROR_HANDLE_URI } from '../util';

const useGetPythonCodeResult = () => {
	const result = useSelector((state: RootState) => state.projectApi.getPythonCodeResult);

	const handleError = useCallback(() => {
		window.location.replace(PROJECT_ERROR_HANDLE_URI);
	}, []);

	return {
		...result,
		errorModal: <StandardModal head="error" body={result.error} onClose={handleError} />,
	};
};

export default useGetPythonCodeResult;
