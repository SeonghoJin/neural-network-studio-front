import useSWR from 'swr';
import { AxiosError, AxiosStatic } from 'axios';
import StandardModal from '../../../components/utils/modal/StandardModal';
import { getUserProfile } from '../../../API/User';

const useGetUserProfileResult = () => {
	const result = useSWR('GetUserProfile', async () => {
		try {
			const response = await getUserProfile();
			return response;
		} catch (e: AxiosError | any) {
			if (e && e.isAxiosError) {
				const status = (e as AxiosError).response?.status;
				if (status === 401) {
					return null;
				}
			}
			throw e;
		}
	});

	const { data, error } = result;
	return {
		data,
		error,
		errorModal: <StandardModal head="error" body={result.error} />,
	};
};

export default useGetUserProfileResult;
