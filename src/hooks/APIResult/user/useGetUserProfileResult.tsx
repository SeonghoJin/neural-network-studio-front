import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../module';
import StandardModal from '../../../components/utils/modal/StandardModal';

const useGetUserProfileResult = () => {
	const result = useSelector((state: RootState) => state.userApi.getUserProfileResult);

	return {
		...result,
		errorModal: <StandardModal head="error" body={result.error} />,
	};
};

export default useGetUserProfileResult;
