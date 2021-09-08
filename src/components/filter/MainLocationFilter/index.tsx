import { useLocation } from 'react-router-dom';
import useSignUp from '../../../hooks/useSignUp';
import { StaticPath } from '../../PagePathConsts';

const MainLocationFilter = () => {
	const location = useLocation<{ from?: any }>();
	const from = location.state?.from;
	const signUpResult = useSignUp();

	return <>{from === StaticPath.SIGN_UP && signUpResult.successFeedback}</>;
};

export default MainLocationFilter;
