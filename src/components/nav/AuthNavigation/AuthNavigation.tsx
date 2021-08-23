import React from 'react';
import { Link } from 'react-router-dom';
import style from './index.module.css';
import utils from '../../utils/index.module.css';

const AuthNavigation = () => {
	return (
		<div className={`${style.profile}`}>
			<>
				<div className={`${utils.divButton} ${style.login}`}>
					<Link to="/login">로그인</Link>
				</div>
				<div className={`${utils.divButton} ${style.signup}`}>
					<Link to="/signup">회원가입</Link>
				</div>
			</>
		</div>
	);
};

export default AuthNavigation;
