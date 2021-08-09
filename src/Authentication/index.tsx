import { useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { getUserProfileThunks } from '../module/API/user/thunks';
import { RootDispatch } from '../module';
import { setAuthentication, UserType } from '../module/Auth';
import useAuthentication from '../hooks/useAuthentication';
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
	return <>{data && children}</>;
};

export default Authentication;
