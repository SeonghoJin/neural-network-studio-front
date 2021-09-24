import { AxiosError } from 'axios';
import { atom, useRecoilState } from 'recoil';
import { useCallback, useEffect } from 'react';
import { updateUserProfile, uploadImage } from '../API/User';
import SimpleBackdrop from '../components/utils/BackLoading';
import { sleep } from '../util';
import ErrorSnackbar from '../components/utils/Snackbar/ErrorSnackbar';
import SuccessSnackbar from '../components/utils/Snackbar/SuccessSnackbar';

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
		error: result?.error,
		loading: result?.loading,
		success: !!result?.data,
		errorFallback: <ErrorSnackbar message="프로필 저장에 실패했습니다. 다시 시도해주십시요." open />,
		loadingFallback: <SimpleBackdrop open={!!result?.loading} />,
		successFallback: <SuccessSnackbar message="프로필이 저장되었습니다." open />,
	};
};
export default useUpdateUserProfile;
