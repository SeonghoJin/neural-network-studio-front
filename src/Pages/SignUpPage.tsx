import React, { ChangeEvent, useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import useSignUp from '../hooks/useSignUp';
import { passwordValidationRegExp } from '../components/Input/Validation';
import { StaticPath } from '../components/PagePathConsts';
import Navigation from '../components/nav';
import icoWarning1 from '../static/img/ico_warning1.png';
import icoSns1 from '../static/img/ico_sns1.png';
import icoSns2 from '../static/img/ico_sns2.png';
import icoSns3 from '../static/img/ico_sns3.png';
import icoSns4 from '../static/img/ico_sns4.png';

export const Signup = () => {
	const [inputs, setInputs] = useState({
		id: '',
		password: '',
		validatePassword: '',
	});
	const [visiblePassword, setVisiblePassword] = useState(false);
	const [passwordValidation, setPasswordValidation] = useState(false);
	const [confirmPasswordValidation, setConfirmPasswordValidation] = useState(false);
	const history = useHistory();
	const { fetch, loading, error, errorFallback, loadingFallback } = useSignUp();

	const onChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const { name, value } = e.target;
			setInputs({
				...inputs,
				[name]: value,
			});
			if (name === 'password') {
				setPasswordValidation(passwordValidationRegExp.test(value));
				setConfirmPasswordValidation(inputs.validatePassword === value);
			}

			if (name === 'validatePassword') {
				setConfirmPasswordValidation(inputs.password === value);
			}
		},
		[inputs, setInputs]
	);

	const onToggleVisiblePassword = () => {
		setVisiblePassword(!visiblePassword);
	};
	const submit = async () => {
		await fetch({
			id: inputs.id,
			pw: inputs.password,
			passwordValidation,
			confirmPasswordValidation,
		}).then((res) => {
			if (!res) return;
			history.push(StaticPath.MAIN);
		});
	};

	return (
		<div id="container">
			{loading && loadingFallback}
			{error && errorFallback}
			<section className="sign">
				<Navigation />
				<div className="pos">
					<div className="box-member">
						<div className="tit-page">계정만들기</div>

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
								<div className="inp-group">
									<input
										placeholder="비밀번호 (영문, 숫자, 특수문자 8-30자)"
										className="inp-frm2"
										name="password"
										type={visiblePassword ? '' : 'password'}
										onChange={(e) => {
											onChange(e);
										}}
									/>
									<button type="button" onClick={onToggleVisiblePassword} className="btn-view js-view">
										<FontAwesomeIcon icon={visiblePassword ? faEyeSlash : faEye} />
									</button>
								</div>
								{!passwordValidation && (
									<div className="txt">
										<img src={icoWarning1} alt=" " />
										반드시 기호, 영문, 숫자를 8자 이상 조합하여야 합니다
									</div>
								)}
							</li>
							<li>
								<div className="inp-group">
									<input
										placeholder="비밀번호 확인"
										className="inp-frm2"
										name="validatePassword"
										type={visiblePassword ? '' : 'password'}
										onChange={onChange}
									/>
								</div>
								{!confirmPasswordValidation && (
									<div className="txt">
										<img src={icoWarning1} alt=" " />
										비밀번호가 틀립니다.
									</div>
								)}
							</li>
						</ol>

						<input type="button" value="회원가입" className="btn-frm" onClick={submit} />

						<div className="sns-login">
							<div className="top">
								<div className="txt">SNS 로그인</div>
							</div>

							<ol className="list-sns">
								<li>
									<a href="#">
										<img src={icoSns1} alt="카카오톡" />
									</a>
								</li>
								<li>
									<a href="#">
										<img src={icoSns2} alt="네이버" />
									</a>
								</li>
								<li>
									<a href="#">
										<img src={icoSns3} alt="구글" />
									</a>
								</li>
								<li>
									<a href="#">
										<img src={icoSns4} alt="애플" />
									</a>
								</li>
							</ol>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
