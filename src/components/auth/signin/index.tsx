import React, { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import style from './index.module.css';
import utils from '../../utils/index.module.css';
import useLogin from '../../../hooks/useLogin';
import { LoginParams } from '../../../API/Auth/types';
import useAuthentication from '../../../hooks/useAuthentication';
import Navigation from '../../nav';
import { PagePathName } from '../../../pagePathName';

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
`;

const SignIn = () => {
	const { fetch, loadingFeedback, errorFeedback } = useLogin();
	const { mutate } = useAuthentication();
	const history = useHistory();
	const [inputs, setInputs] = useState({
		id: '',
		pw: '',
	});

	const login = useCallback(
		async (params: LoginParams) => {
			const response = await fetch(params);
			if (response) {
				await mutate();
				history.push(PagePathName.MAIN);
			}
		},
		[fetch, history, mutate]
	);

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
			if (e.key === 'Enter') login(inputs);
		},
		[inputs, login]
	);

	return (
		<Wrapper>
			<Navigation />
			<div className={style.signinWrapper}>
				{errorFeedback}
				{loadingFeedback}
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
						<button type="button" className={`${style.loginButton}`} onClick={() => login(inputs)}>
							로그인
						</button>
					</div>
					<div className={style.others}>
						<Link to="/">비밀번호찾기</Link>| <Link to="/signup">회원가입</Link>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default SignIn;
