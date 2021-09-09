import { AxiosError } from 'axios';
import { atom, useRecoilState } from 'recoil';
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { updateUserProfile, uploadImage } from '../API/User';
import StandardModal from '../components/utils/modal/StandardModal';
import SimpleBackdrop from '../components/utils/BackLoading';
import useAuthentication from './useAuthentication';
import { sleep } from '../util';

interface UserProfileToFetchParams {
	blob: File | null;
	id: number;
	description: string;
	name: string;
	email: string;
	webSite: string;
}

type UpdateUserProfileResult = {
	loading: boolean;
	error: null | AxiosError;
	data: null | boolean;
} | null;

const updateUserProfileResultState = atom<UpdateUserProfileResult>({
	key: 'updateUserProfileResultState',
	default: null,
});

const useUpdateUserProfile = () => {
	const [result, setResult] = useRecoilState(updateUserProfileResultState);
	const { mutate } = useAuthentication();
	const history = useHistory();
	const fetch = useCallback(
		async ({ blob, email, name, webSite, description, id }: UserProfileToFetchParams) => {
			setResult({
				loading: true,
				error: null,
				data: null,
			});

			const delayedData = sleep(500).then(async () => {
				let profileId = id;
				if (blob != null) {
					try {
						const formData = new FormData();
						formData.append('image', blob);
						const userProfileImage = await uploadImage(formData);
						profileId = userProfileImage.id;
					} catch (e: AxiosError | any) {
						await setResult({
							loading: false,
							error: e,
							data: null,
						});
						return null;
					}
				}
				try {
					const response = await updateUserProfile({
						profileImage: profileId,
						description,
						name,
						email,
						webSite,
					});
					setResult({
						loading: false,
						error: null,
						data: response || true,
					});
					return response || true;
				} catch (e: AxiosError | any) {
					setResult({
						loading: false,
						error: e,
						data: null,
					});
					return null;
				}
			});
			return delayedData;
		},
		[setResult]
	);

	return {
		...result,
		fetch,
		errorFeedback: result?.error && (
			<StandardModal
				head={result?.error.name}
				onClose={() => {
					setResult(null);
				}}
			/>
		),
		loadingFeedback: result?.loading && <SimpleBackdrop open={!!result?.loading} />,
		successFeedback: result?.data && (
			<StandardModal
				head="저장되었습니다."
				onClose={() => {
					setResult(null);
					mutate();
					history.goBack();
				}}
			/>
		),
	};
};
export default useUpdateUserProfile;
