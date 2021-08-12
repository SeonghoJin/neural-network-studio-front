import { useLocation } from 'react-router-dom';
import useSignUp from '../../hooks/useSignUp';
import { PagePathName } from '../../pagePathName';

const MainLocationFilter = () => {
	const location = useLocation<{ from?: any }>();
	const from = location.state?.from;
	const signUpResult = useSignUp();

	return <>{from === PagePathName.SIGN_UP && signUpResult.successFeedback}</>;
};

export default MainLocationFilter;
