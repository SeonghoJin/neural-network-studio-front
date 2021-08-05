import React from 'react';
import style from './index.module.css';
import utils from '../utils/index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { signUp } from '../../API/User';

class Signup extends React.PureComponent {
	state = {
		idValue: '',
		pwVisible: false,
		pwValue: '',
		pwValid: '',
		pwCheck: false,
		pwApprove: false,
	};

	onChangeId = (e) => {
		this.setState({
			idValue: e.target.value,
		});
	};

	// 비밀번호 조건이 맞지않으면 빨간색으로 알림.
	onChangePW = (e) => {
		const re = new RegExp('^(?=.*\\d)(?=.*[a-zA-Z])(?=.*([^\\w\\d\\s]|_)).{8,72}$');

		if (re.test(e.target.value)) {
			this.setState({
				pwApprove: true,
			});
		} else {
			this.setState({
				pwApprove: false,
			});
		}
		if (e.target.value !== this.state.pwValid) {
			this.setState({
				pwCheck: false,
			});
		} else {
			this.setState({
				pwCheck: true,
			});
		}

		this.setState({
			pwValue: e.target.value,
		});
	};

	// validate pw.
	onChangePWValid = (e) => {
		if (e.target.value !== this.state.pwValue) {
			this.setState({
				pwCheck: false,
			});
		} else {
			this.setState({
				pwCheck: true,
			});
		}
		this.setState({
			pwValid: e.target.value,
		});
	};

	clickEye = () => {
		let nextState = !this.state.pwVisible;
		this.setState({
			pwVisible: nextState,
		});
	};

	submit = () => {
		if (!this.state.pwApprove) {
			alert('비밀번호는 반드시 기호, 영문, 숫자를 포함한 8자리이상으로 해야합니다.');
			return;
		} else if (!this.state.pwCheck) {
			alert('비밀번호가 일치하지 않습니다.');
			return;
		}

		signUp({
			id: this.state.idValue,
			pw: this.state.pwValue,
		})
			.then((res) => {
				console.log(res);
				alert('회원가입이 완료되었습니다.');
				this.props.history.push('/');
			})
			.catch((err) => {
				console.log(err);
				alert('이미 존재하는 아이디 입니다.');
			});
	};

	render() {
		return (
			<>
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
									<input placeholder={'사용자 이름'} onChange={this.onChangeId} />
								</div>
								<div className={`${utils.inputWrapper} ${utils.flexColumn}`}>
									<div className={`${utils.inputWrapper}`}>
										<input
											type={this.state.pwVisible ? '' : 'password'}
											placeholder={'비밀번호'}
											onChange={this.onChangePW}
										/>
									</div>
									{this.state.pwValue === '' ? (
										<span className={`${style.requirement}`}>기호, 영문, 숫자를 포함한 8자리 이상</span>
									) : this.state.pwApprove ? (
										<span className={`${style.requirement}`}>기호, 영문, 숫자를 포함한 8자리 이상</span>
									) : (
										<span className={`${style.requirement} ${style.red}`}>
											반드시 기호, 영문, 숫자를 포함한 8자리이상으로 해야합니다.
										</span>
									)}
								</div>
								<div className={`${utils.inputWrapper} ${utils.flexColumn}`}>
									<div className={`${utils.inputWrapper}`}>
										<input
											type={this.state.pwVisible ? '' : 'password'}
											placeholder={'비밀번호 확인'}
											onChange={this.onChangePWValid}
										/>
									</div>
									{this.state.pwValid === '' ? (
										''
									) : this.state.pwCheck ? (
										<span className={`${style.requirement} ${style.green}`}>맞습니다.</span>
									) : (
										<span className={`${style.requirement} ${style.red}`}>비밀번호가 틀립니다.</span>
									)}
								</div>
								<div className={style.pwVisible}>
									<span>비밀번호 표시</span>
									<a href={'#'} onClick={this.clickEye} className={`${utils.iconButton}`}>
										<FontAwesomeIcon icon={this.state.pwVisible ? faEyeSlash : faEye} />
									</a>
								</div>
								<div className={`${utils.divButton} ${style.submit}`}>
									<a onClick={this.submit}>제출</a>
								</div>
							</div>
						</main>
						<footer></footer>
					</div>
				</div>
			</>
		);
	}
}

export default withRouter(Signup);
