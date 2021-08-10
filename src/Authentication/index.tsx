import { useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { getUserProfileThunks } from '../module/API/user/thunks';
import { RootDispatch } from '../module';
import { setAuthentication, UserType } from '../module/Auth';

const Authentication = () => {
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

	return <></>;
};

export default Authentication;
