import React from 'react';
import style from './index.module.css';
import utils from '../utils/index.module.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import cookie from 'react-cookies';

class Signin extends React.Component {
  state = {
    idFocus: false,
    pwFocus: false,
    idValue: '',
    pwValue: '',
  };

  onIdChange = (e) => {
    this.setState({
      idValue: e.target.value,
    });
  };

  onPwChange = (e) => {
    this.setState({
      pwValue: e.target.value,
    });
  };

  onPressEnter = (e) => {
    console.log(e);
    if (e.key === 'Enter') this.loginRequest();
  };

  loginRequest = async () => {
    await axios({
      method: 'POST',
      url: '/api/login',
      data: {
        id: this.state.idValue,
        pw: this.state.pwValue,
      },
      withCredentials: true,
    })
      .then((res) => {
        window.location.href = '/';
      })
      .catch((err) => {
        alert('아이디가 존재하지 않거나 비밀번호가 일치하지 않습니다.');
      });
  };

  render() {
    return (
      <div className={`${style.signin}`} onKeyDown={this.onPressEnter}>
        <div className={style.signinLogo}>
          <h1>Neural Network Studio</h1>
        </div>
        <div className={`${style.loginForm}`}>
          <div className={`${utils.inputWrapper}`}>
            <input
              name={'id'}
              placeholder={'아이디'}
              onChange={this.onIdChange}
            />
          </div>
          <div className={`${utils.inputWrapper}`}>
            <input
              name={'pw'}
              placeholder={'비밀번호'}
              type={'password'}
              onChange={this.onPwChange}
            />
          </div>
          <button
            className={`${style.loginButton}`}
            onClick={this.loginRequest}
          >
            로그인
          </button>
        </div>
        <div className={style.others}>
          <a href={'#'}>비밀번호 찾기</a>|<a href={'/signup'}>회원가입</a>
        </div>
      </div>
    );
  }
}

export default withRouter(Signin);
