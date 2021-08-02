import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import useGetUserProfileResult from '../hooks/APIResult/user/useGetUserProfileResult';
import { getUserProfileThunks } from '../module/API/user/thunks';
import { RootDispatch } from '../module';
import { setAuthentication, UserType } from '../module/Auth';

type Props = {
	children: any;
};
const Authentication = ({ children }: Props) => {
	const { loading } = useGetUserProfileResult();
	const thunkDispatch: RootDispatch = useDispatch();
	const dispatch = useDispatch();

	useEffect(() => {
		thunkDispatch(getUserProfileThunks()).then((res) => {
			dispatch(
				setAuthentication({
					user: {
						type: (res && UserType.Login) || UserType.Visitor,
						profile: res,
					},
				})
			);
		});
	}, [dispatch, thunkDispatch]);

	return <>{!loading && children}</>;
};

export default Authentication;
