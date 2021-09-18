import React from 'react';
import { Link } from 'react-router-dom';
import { StaticPath } from '../../PagePathConsts';
import imgLogo2 from '../../../static/img/img_logo2.png';

const AuthNavigation = () => {
	return (
		<div className="header">
			<Link to={StaticPath.MAIN}>
				<img src={imgLogo2} alt="NNS" className="hd-logo" />
			</Link>
			<div className="hd-login-before">
				<Link to="/login">로그인</Link>
				<Link to="/signup">회원가입</Link>
			</div>
		</div>
	);
};

export default AuthNavigation;
