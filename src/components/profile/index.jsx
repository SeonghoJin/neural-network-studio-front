import React from 'react';
import { withRouter } from 'react-router-dom';

import Header from '../header/header';
import Main from '../profile/main/main';
import axios from 'axios';

import style from './index.module.css';

class Profile extends React.PureComponent {
  state = {
    auth: false,
    user: null,
    loading: true,
  };

  getUser = async () => {
    await axios({
      method: 'GET',
      url: '/api/user',
      withCredentials: true,
    })
      .then((res) => {
        this.setState({
          auth: true,
          user: res.data,
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
      <>
        <Header
          auth={this.state.auth}
          user={this.state.user}
          loading={this.state.loading}
        />
        <div className={`${style.wrapper}`}>
          {this.state.loading ? null : <Main user={this.state.user} />}
        </div>
      </>
    );
  }
}

export default withRouter(Profile);
