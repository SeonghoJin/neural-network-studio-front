import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import useGetUserProfileResult from '../hooks/APIResult/user/useGetUserProfileResult';
import useAuthentication, { UserType } from '../hooks/useAuthentication';

type Props = {
	children: any;
};

const Authentication = ({ children }: Props) => {
	const { data } = useGetUserProfileResult();
	const { setUser } = useAuthentication();
	useEffect(() => {
		if (data !== undefined) {
			setUser({ type: (data && UserType.Login) || UserType.Visitor, profile: data });
		}
	}, [data, setUser]);

	return <>{data !== undefined && children}</>;
};

export default Authentication;
