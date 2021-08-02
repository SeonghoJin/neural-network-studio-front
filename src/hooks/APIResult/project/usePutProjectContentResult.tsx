import { useSelector } from 'react-redux';
import { RootState } from '../../../module';
import StandardModal from '../../../components/utils/modal/StandardModal';

const usePutProjectContentResult = () => {
	const result = useSelector((state: RootState) => state.projectApi.putProjectContentResult);

	return {
		...result,
		errorModal: <StandardModal head="error" body={result.error} />,
	};
};

export default usePutProjectContentResult;
