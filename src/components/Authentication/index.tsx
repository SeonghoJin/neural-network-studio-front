import React from 'react';
import useAuthentication from '../../hooks/useAuthentication';

type Props = {
	children: any;
};

const Authentication = ({ children }: Props) => {
	const { user } = useAuthentication();
	return <>{user != null && children}</>;
};

export default Authentication;
