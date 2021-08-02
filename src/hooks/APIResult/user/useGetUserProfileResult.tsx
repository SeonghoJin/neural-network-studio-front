import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../module';
import StandardModal from '../../../components/modal/StandardModal';

const useGetUserProfileResult = () => {
	const result = useSelector((state: RootState) => state.userApi.getUserProfileResult);
	const dispatch = useDispatch();

	return {
		...result,
		errorModal: <StandardModal head="error" body={result.error} />,
	};
};

export default useGetUserProfileResult;
