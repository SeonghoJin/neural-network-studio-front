import { useSelector } from 'react-redux';
import { RootState } from '../../../module';
import StandardModal from '../../../components/utils/modal/StandardModal';

const usePutProjectConfigResult = () => {
	const result = useSelector((state: RootState) => state.projectApi.putProjectConfigResult);

	return {
		...result,
		errorModal: <StandardModal head="error" body={result.error} />,
	};
};

export default usePutProjectConfigResult;
