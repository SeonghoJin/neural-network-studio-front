import React from 'react';
import { withRouter } from 'react-router-dom';

import Header from '../header/header';
import Main from './main/main';

import style from './index.module.css';
import axios from 'axios';
import { getUserProfile } from '../../API/User';

class NewProject extends React.PureComponent {
	state = {
		auth: false,
		user: null,
	};

	getUser = async () => {
		getUserProfile().then((res) => {
			if (res.status === 401) {
				this.setState({
					auth: false,
				});
				alert('로그인이 필요합니다');
				this.props.history.push('/login');
			} else {
				this.setState({
					auth: true,
					user: res.data,
				});
			}
		});
	};

	componentDidMount() {
		this.getUser();
	}

	render() {
		return (
			<>
				<Header auth={this.state.auth} user={this.state.user} />
				<div className={`${style.wrapper}`}>
					<Main />
				</div>
			</>
		);
	}
}

export default withRouter(NewProject);
