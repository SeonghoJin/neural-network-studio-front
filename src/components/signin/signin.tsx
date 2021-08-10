import React, { useCallback, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import style from './index.module.css';
import utils from '../utils/index.module.css';
import useGetUserProfileResult from '../../hooks/APIResult/user/useGetUserProfileResult';
import useLoginResult from '../../hooks/APIResult/auth/useLoginResult';
import BackLoading from '../utils/BackLoading';

type Props = {
	requestLogin: ({ id, pw }: { id: string; pw: string }) => void;
};

const SignInResult = () => {
	const getUserProfileResult = useGetUserProfileResult();
	const loginResult = useLoginResult();

	return (
		<>
			<BackLoading open={getUserProfileResult.loading || loginResult.loading} />
			{loginResult.error && loginResult.errorModal}
			{getUserProfileResult.data && loginResult.data && <Redirect to="/" />}
		</>
	);
};

const SignIn = ({ requestLogin }: Props) => {
	const [inputs, setInputs] = useState({
		id: '',
		pw: '',
	});

	const onChange = useCallback(
		(e) => {
			const { name, value } = e.target;
			setInputs({
				...inputs,
				[name]: value,
			});
		},
		[inputs, setInputs]
	);

	const onPressEnter = useCallback(
		(e) => {
			if (e.key === 'Enter') requestLogin(inputs);
		},
		[requestLogin, inputs]
	);

	return (
		<div role="button" tabIndex={0} className={`${style.signin}`} onKeyDown={onPressEnter}>
			<div className={style.signinLogo}>
				<h1>Neural Network Studio</h1>
			</div>
			<div className={`${style.loginForm}`}>
				<div className={`${utils.inputWrapper}`}>
					<input name="id" placeholder="아이디" onChange={onChange} />
				</div>
				<div className={`${utils.inputWrapper}`}>
					<input name="pw" placeholder="비밀번호" type="password" onChange={onChange} />
				</div>
				<button type="button" className={`${style.loginButton}`} onClick={() => requestLogin(inputs)}>
					로그인
				</button>
			</div>
			<div className={style.others}>
				<Link to="/">비밀번호찾기</Link>| <Link to="/signup">회원가입</Link>
			</div>
			<SignInResult />
		</div>
	);
};

export default SignIn;
