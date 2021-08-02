import { useSelector } from 'react-redux';
import { RootState } from '../../../module';
import StandardModal from '../../../components/utils/modal/StandardModal';

const useGetProjectResult = () => {
	const result = useSelector((state: RootState) => state.projectApi.getProjectsResult);

	return {
		...result,
		errorModal: <StandardModal head="error" body={result.error} />,
	};
};

export default useGetProjectResult;
