import { useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { getUserProfileThunks } from '../module/API/user/thunks';
import { RootDispatch } from '../module';
import { setAuthentication, UserType } from '../module/Auth';
import useAuthentication from '../hooks/useAuthentication';

type Props = {
	children: any;
};

const Authentication = ({ children }: Props) => {
	const thunkDispatch: RootDispatch = useDispatch();
	const dispatch = useDispatch();
	const { user } = useAuthentication();

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

	return <>{user != null && children}</>;
};

export default Authentication;
