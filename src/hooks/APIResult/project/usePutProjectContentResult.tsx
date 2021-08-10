import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { RootState } from '../../../module';
import StandardModal from '../../../components/utils/modal/StandardModal';

const usePutProjectContentResult = () => {
	const result = useSelector((state: RootState) => state.projectApi.putProjectContentResult);
	const handleError = useCallback(() => {
		window.location.reload();
	}, []);
	return {
		...result,
		errorModal: <StandardModal head="error" body={result.error} onClose={handleError} />,
	};
};

export default usePutProjectContentResult;
