import React from 'react';
import style from './auth.module.css';
import utils from '../../utils/index.module.css';
import Modal from '../../utils/modal/modal';
import Signin from '../../signin/signin';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import SignInContainer from '../../signin/signInContainer';

class Auth extends React.Component {
	state = {
		modalOpen: false,
	};

	render() {
		return (
			<div className={`${style.profile}`}>
				{
					<>
						<div className={`${utils.divButton} ${style.login}`}>
							<Link to="/login">로그인</Link>
						</div>
						<div className={`${utils.divButton} ${style.signup}`}>
							<Link to="/signup">회원가입</Link>
						</div>
					</>
				}
			</div>
		);
	}
}

export default withRouter(Auth);
