import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { RootState } from '../../module';
import StandardModal from '../../components/modal/StandardModal';
import { putProjectInfoInit } from '../../module/API/project';

const usePutProjectInfoResult = () => {
	const result = useSelector((state: RootState) => state.projectApi.putProjectInfoResult);
	const dispatch = useDispatch();

	const handleError = useCallback(() => {
		dispatch(putProjectInfoInit());
	}, [dispatch]);

	return {
		...result,
		errorModal: <StandardModal head="error" body={result.error} onClose={handleError} />,
	};
};

export default usePutProjectInfoResult;
