import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './index.module.css';
import utils from '../utils/index.module.css';
import { RootDispatch } from '../../module';
import { loginThunks } from '../../module/API/auth/thunks';
import { getUserProfileThunks } from '../../module/API/user/thunks';
import { setAuthentication, UserType } from '../../module/Auth';

const SignIn = () => {
	const [inputs, setInputs] = useState({
		id: '',
		pw: '',
	});

	const thunkDispatch: RootDispatch = useDispatch();
	const dispatch = useDispatch();

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

	const requestLogin = useCallback(async () => {
		thunkDispatch(loginThunks(inputs))
			.then(async (res) => {
				if (!res) return null;
				const response = await thunkDispatch(getUserProfileThunks());
				return response;
			})
			.then((res) => {
				if (!res) return;
				dispatch(
					setAuthentication({
						user: {
							type: UserType.Login,
							profile: res,
						},
					})
				);
			});
	}, [dispatch, inputs, thunkDispatch]);

	const onPressEnter = useCallback(
		(e) => {
			if (e.key === 'Enter') requestLogin();
		},
		[requestLogin]
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
				<button type="button" className={`${style.loginButton}`} onClick={requestLogin}>
					<Link to="/">로그인</Link>
				</button>
			</div>
			<div className={style.others}>
				<Link to="/">비밀번호찾기</Link>| <Link to="/signup">회원가입</Link>
			</div>
		</div>
	);
};

export default SignIn;
