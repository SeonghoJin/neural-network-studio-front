import { Redirect } from 'react-router-dom';
import useAuthentication, { UserType } from '../hooks/useAuthentication';

type Props = {
	children: any;
};

const PrivateAuthentication = ({ children }: Props) => {
	const { user } = useAuthentication();
	console.log(user, children);
	return (
		<>
			{user?.type === UserType.Visitor && alert('로그인이 필요합니다.')}
			{user?.type === UserType.Visitor && <Redirect to="/login" />}
			{user?.type === UserType.Login && children}
		</>
	);
};

export default PrivateAuthentication;
