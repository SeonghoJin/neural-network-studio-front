import React from 'react';
import { Link } from 'react-router-dom';

const AuthNavigation = () => {
	return (
		<div className="hd-login-before">
			<Link to="/login">로그인</Link>
			<Link to="/signup">회원가입</Link>
		</div>
	);
};

export default AuthNavigation;
