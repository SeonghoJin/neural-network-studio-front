import React from 'react';
import style from './main.module.css';
import utils from '../../utils/index.module.css';

import axios from 'axios';
import { createProject } from '../../../API/project';

const maxNameLen = 45;
const maxDescriptionLen = 2000;

class Main extends React.PureComponent {
	state = {
		name: '',
		description: '',
	};

	onNameChange = (e) => {
		this.setState({
			name: e.target.value,
		});
	};

	onDescriptionChange = (e) => {
		this.setState({
			description: e.target.value,
		});
	};

	submit = async () => {
		createProject({
			name: this.state.name,
			description: this.state.description,
		}).then((res) => {
			console.log(res);
			window.location.href = '/dashboard';
		}).catch((err) => {
			if (err.response.status === 422) {
				alert('이미 존재하는 프로젝트 이름입니다.');
			}
		});
	};

	render() {
		return (
			<div className={`${style.main}`}>
				<div className={`${style.projectInfo}`}>
					<div className={`${utils.inputWrapper}`} style={{ width: '100%', 'margin-bottom': '20px' }}>
						<input
							className={`${style.name}`}
							placeholder={'프로젝트 이름 (최대 45자)'}
							onChange={this.onNameChange}
							maxLength={maxNameLen}
						/>
					</div>
					<div className={`${utils.inputWrapper}`} style={{ width: '100%' }}>
						<textarea
							className={`${style.description}`}
							placeholder={'프로젝트 설명 (최대 2000자)'}
							onChange={this.onDescriptionChange}
							maxLength={maxDescriptionLen}
						/>
					</div>
				</div>
				<div className={`${style.footer}`}>
					<button className={`${style.createButton}`} onClick={this.submit}>
						프로젝트 생성
					</button>
				</div>
			</div>
		);
	}
}

export default Main;
