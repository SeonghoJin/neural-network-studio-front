import { Link, useHistory, useLocation } from 'react-router-dom';
import React, { useCallback, useEffect, useState } from 'react';
import useLogin from '../hooks/useLogin';
import useAuthentication from '../hooks/useAuthentication';
import { LoginParams } from '../API/Auth/types';
import { StaticPath } from '../components/PagePathConsts';
import icoSns1 from '../static/img/ico_sns1.png';
import icoSns2 from '../static/img/ico_sns2.png';
import icoSns3 from '../static/img/ico_sns3.png';
import icoSns4 from '../static/img/ico_sns4.png';
import icoLogo1 from '../static/img/img_logo1.png';
import Navigation from '../components/nav';

export const SignIn = () => {
	const { fetch, loading, loadingFallback } = useLogin();
	const { mutate } = useAuthentication();
	const history = useHistory();
	const [inputs, setInputs] = useState({
		id: '',
		pw: '',
	});

	useEffect(() => {
		const unBlock = history.block((location, action) => {
			if (action === 'POP') {
				document.location.href = '/';
			}
		});

		return unBlock;
	}, [history]);

	const login = useCallback(
		async (params: LoginParams) => {
			const response = await fetch(params);
			if (response) {
				await mutate();
				history.push(StaticPath.MAIN);
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
		<div id="container">
			{loading && loadingFallback}
			<section className="login">
				<Navigation currentMenu={0} />

				<div className="pos">
					<img src={icoLogo1} alt="NNS" className="img-logo" />

					<div className="box-member" onKeyDown={onPressEnter}>
						<div className="tit-page">로그인</div>

						<ol className="list-frm">
							<li>
								<input
									type="text"
									name="id"
									placeholder="아이디를 입력하세요"
									className="inp-frm"
									onChange={onChange}
								/>
							</li>
							<li>
								<input
									type="password"
									name="pw"
									placeholder="비밀번호를 입력하세요"
									className="inp-frm"
									onChange={onChange}
								/>
							</li>
						</ol>

						<div className="util">
							<Link to="/signup" className="btn-link">
								회원가입
							</Link>
						</div>

						<input
							type="button"
							value="로그인"
							className="btn-frm"
							onClick={() => {
								login(inputs);
							}}
						/>
					</div>
				</div>
			</section>
		</div>
	);
};
