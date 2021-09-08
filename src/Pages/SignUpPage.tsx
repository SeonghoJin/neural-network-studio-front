import React, { ChangeEvent, useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import style from '../components/auth/signup/index.module.css';
import utils from '../components/utils/index.module.css';
import useSignUp from '../hooks/useSignUp';
import { passwordValidationRegExp } from '../components/Input/Validation';
import { StaticPath } from '../pagePathName';
import Navigation from '../components/nav';

const Signup = () => {
	const [inputs, setInputs] = useState({
		id: '',
		password: '',
	});
	const [visiblePassword, setVisiblePassword] = useState(false);
	const [passwordValidation, setPasswordValidation] = useState(false);
	const [confirmPasswordValidation, setConfirmPasswordValidation] = useState(false);
	const history = useHistory();
	const { fetch, loadingFeedback, errorFeedback } = useSignUp();

	const onChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const { name, value } = e.target;
			setInputs({
				...inputs,
				[name]: value,
			});
			if (name === 'password') {
				setPasswordValidation(passwordValidationRegExp.test(value));
			}
		},
		[inputs, setInputs]
	);

	const onChangeConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
		setConfirmPasswordValidation(e.target.value === inputs.password);
	};

	const onToggleVisiblePassword = () => {
		setVisiblePassword(!visiblePassword);
	};
	const submit = async () => {
		if (!passwordValidation) {
			alert('비밀번호는 반드시 기호, 영문, 숫자를 포함한 8자리이상으로 해야합니다.');
			return;
		}
		if (!confirmPasswordValidation) {
			alert('비밀번호가 일치하지 않습니다.');
			return;
		}

		await fetch({
			id: inputs.id,
			pw: inputs.password,
		}).then((res) => {
			if (!res) return;
			history.push({
				pathname: StaticPath.MAIN,
				state: {
					from: StaticPath.SIGN_UP,
				},
			});
		});
	};

	return (
		<>
			<Navigation />
			<div className={`${style.singupWrapper}`}>
				<div className={`${style.formWrapper} ${utils.flexColumn}`}>
					<header>
						<h1>Neural Network Studio</h1>
						<div>
							<h3>계정만들기</h3>
						</div>
					</header>
					<main>
						<div className={`${style.signupForm} `}>
							<div className={`${utils.inputWrapper} ${utils.flexColumn}`}>
								<input placeholder="사용자 이름" onChange={onChange} name="id" />
							</div>
							<div className={`${utils.inputWrapper} ${utils.flexColumn}`}>
								<div className={`${utils.inputWrapper}`}>
									<input
										name="password"
										type={visiblePassword ? '' : 'password'}
										placeholder="비밀번호"
										onChange={(e) => {
											onChange(e);
										}}
									/>
								</div>
								{passwordValidation ? (
									<span className={`${style.requirement} ${style.green}`}>기호, 영문, 숫자를 포함한 8자리 이상</span>
								) : (
									<span className={`${style.requirement} ${style.red}`}>
										반드시 기호, 영문, 숫자를 포함한 8자리이상으로 해야합니다.
									</span>
								)}
							</div>
							<div className={`${utils.inputWrapper} ${utils.flexColumn}`}>
								<div className={`${utils.inputWrapper}`}>
									<input
										type={visiblePassword ? '' : 'password'}
										placeholder="비밀번호 확인"
										onChange={onChangeConfirmPassword}
									/>
								</div>
								{passwordValidation && confirmPasswordValidation ? (
									<span className={`${style.requirement} ${style.green}`}>맞습니다.</span>
								) : (
									<span className={`${style.requirement} ${style.red}`}>비밀번호가 틀립니다.</span>
								)}
							</div>
							<div className={style.pwVisible}>
								<span>비밀번호 표시</span>
								<button type="button" onClick={onToggleVisiblePassword} className={`${utils.iconButton}`}>
									<FontAwesomeIcon icon={visiblePassword ? faEyeSlash : faEye} />
								</button>
							</div>
							<button className={`${style.submit}`} type="button" onClick={submit}>
								<span>회원가입</span>
							</button>
						</div>
					</main>
				</div>
			</div>
			{errorFeedback}
			{loadingFeedback}
		</>
	);
};

export default Signup;
