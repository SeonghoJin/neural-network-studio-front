import React from 'react';
import style from './index.module.css';
import SignInContainer from './signInContainer';

class LoginPage extends React.PureComponent {
	render() {
		return (
			<div className={style.signinWrapper}>
				<SignInContainer />
			</div>
		);
	}
}

export default LoginPage;
