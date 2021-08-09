import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { setAuthentication, UserType } from '../module/Auth';
import useGetUserProfileResult from '../hooks/APIResult/user/useGetUserProfileResult';

type Props = {
	children: any;
};

const Authentication = ({ children }: Props) => {
	const dispatch = useDispatch();
	const { data } = useGetUserProfileResult();

	useEffect(() => {
		if (data !== undefined) {
			dispatch(
				setAuthentication({
					user: {
						type: (data && UserType.Login) || UserType.Visitor,
						profile: data,
					},
				})
			);
		}
	}, [data, dispatch]);

	return <>{data !== undefined && children}</>;
};

export default Authentication;
