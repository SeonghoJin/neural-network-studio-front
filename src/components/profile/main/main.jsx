import React from 'react';
import Header from './header';
import axios from 'axios';

import style from './main.module.css';
import UserInfo from './userInfo';

class Main extends React.PureComponent {
  state = {
    modify: false,
    email: this.props.user.email,
    webSite: this.props.user.webSite,
    description: this.props.user.description,
    profileImage: this.props.user.profileImage,
    name: this.props.user.name,
    user: this.props.user,
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

  onPressButton = async () => {
    if (!this.state.modify) {
      this.setState({
        modify: true,
      });
    } else {
      if (window.confirm('저장하시겠습니까?')) {
        await axios({
          method: 'PUT',
          url: '/api/user',
          data: {
            profileImage: this.state.profileImage,
            description: this.state.description,
            name: this.state.name,
            email: this.state.email,
            webSite: this.state.webSite,
          },
        })
          .then((res) => {
            this.getUser();
          })
          .catch((err) => {
            alert('something wrong!');
          });
        this.setState({
          modify: false,
        });
      }
    }
  };

  onPressCancel = () => {
    this.setState({
      modify: false,
    });
  };

  setEmail = (email) => {
    this.setState({
      email: email,
    });
    console.log(this.state.email);
  };

  setWebSite = (webSite) => {
    this.setState({
      webSite: webSite,
    });
  };

  setDescription = (description) => {
    this.setState({
      description: description,
    });
  };

  setName = (name) => {
    this.setState({
      name: name,
    });
  };

  render() {
    return (
      <div className={`${style.mainWrapper}`}>
        <Header
          user={this.state.user}
          modify={this.state.modify}
          onChangeName={this.setName}
        >
          <div className={`${style.buttons}`}>
            {this.state.modify ? (
              <button
                className={`${style.modifyButton}`}
                onClick={this.onPressCancel}
              >
                취소
              </button>
            ) : null}
            <button
              className={`${style.modifyButton}`}
              onClick={this.onPressButton}
            >
              {this.state.modify ? '저장' : '수정'}
            </button>
          </div>
        </Header>
        <UserInfo
          user={this.state.user}
          modify={this.state.modify}
          onChangeEmail={this.setEmail}
          onChangeWebSite={this.setWebSite}
          onChangeDescription={this.setDescription}
        />
        <footer>프리셋 목록 들어감</footer>
      </div>
    );
  }
}

export default Main;
