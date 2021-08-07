import React from 'react';
import { withRouter } from 'react-router-dom';

import Header from '../header/header';
import Main from '../profile/main/main';
import axios from 'axios';

import style from './index.module.css';
import { getUserProfile } from '../../API/User';

class Profile extends React.PureComponent {
	state = {
		auth: false,
		user: null,
		loading: true,
	};

	getUser = async () => {
		getUserProfile()
			.then((res) => {
				console.log(res);
				this.setState({
					auth: true,
					user: res,
					loading: false,
				});
			})
			.catch((err) => {
				console.log(err);
				this.setState({
					auth: false,
					loading: false,
				});
				alert('로그인이 필요합니다.');
				this.props.history.push('/login');
			});
	};

	componentDidMount() {
		this.getUser();
	}

	render() {
		console.log(this.state);
		return (
			<>
				<Header />
				<div className={`${style.wrapper}`}>{this.state.loading ? null : <Main user={this.state.user} />}</div>
			</>
		);
	}
}

export default withRouter(Profile);
