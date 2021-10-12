import React, { ChangeEvent, useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useSnackbar } from 'notistack';
import { passwordValidationRegExp } from '../components/Input/Validation';
import Navigation from '../components/nav';
import icoWarning1 from '../static/img/ico_warning1.png';
import useUpdatePassword from '../hooks/useUpdatePassword';
import SimpleBackdrop from '../components/utils/BackLoading';

export const UpdatePasswordPage = () => {
	const [inputs, setInputs] = useState({
		beforePassword: '',
		password: '',
		validatePassword: '',
	});
	const [visiblePassword, setVisiblePassword] = useState(false);
	const [passwordValidation, setPasswordValidation] = useState(false);
	const [confirmPasswordValidation, setConfirmPasswordValidation] = useState(false);
	const { fetch, loading } = useUpdatePassword();
	const { enqueueSnackbar } = useSnackbar();

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
		if (!passwordValidation) {
			enqueueSnackbar('비밀번호는 반드시 기호, 영문, 숫자를 포함한 8자리이상으로 해야합니다.', {
				variant: 'error',
			});
			return;
		}
		if (!confirmPasswordValidation) {
			enqueueSnackbar('비밀번호가 일치하지 않습니다.', {
				variant: 'error',
			});
			return;
		}
		await fetch(inputs.password);
	};

	return (
		<div id="container">
			{loading && <SimpleBackdrop open />}
			<section className="sign">
				<Navigation />
				<div className="pos">
					<div className="box-member">
						<div className="tit-page">비밀번호 수정</div>

						<ol className="list-frm">
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

						<input type="button" value="비밀번호 수정" className="btn-frm" onClick={submit} />
					</div>
				</div>
			</section>
		</div>
	);
};
