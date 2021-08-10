import React from 'react';
import { withRouter } from 'react-router-dom';

import Index from '../nav';
import Main from '../profile/main/main';
import axios from 'axios';

import style from './index.module.css';
import { getUserProfile } from '../../API/User';
import PrivateAuthentication from '../../Authentication/PrivateAuthentication';

class Profile extends React.PureComponent {
	state = {
		auth: false,
		user: null,
		loading: true,
	};

	getUser = async () => {
		getUserProfile()
			.then((res) => {
				this.setState({
					auth: true,
					user: res,
					loading: false,
				});
			})
			.catch((err) => {
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
		return (
			<PrivateAuthentication>
				<Index />
				<div className={`${style.wrapper}`}>{this.state.loading ? null : <Main user={this.state.user} />}</div>
			</PrivateAuthentication>
		);
	}
}

export default withRouter(Profile);
