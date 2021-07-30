import React from 'react';
import style from './main.module.css';
import utils from '../../utils/index.module.css';

import axios from 'axios';

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
    await axios({
      method: 'POST',
      url: '/api/project',
      data: {
        name: this.state.name,
        description: this.state.description,
      },
      withCredentials: true,
    }).then((res) => {
      if (res.status === 422) {
        alert('이미 존재하는 프로젝트 이름입니다.');
        return;
      }
      console.log(res);
      window.location.href = '/dashboard';
    });
  };

  render() {
    return (
      <div className={`${style.main}`}>
        <div className={`${style.projectInfo}`}>
          <div
            className={`${utils.inputWrapper}`}
            style={{ width: '100%', 'margin-bottom': '20px' }}
          >
            <input
              className={`${style.name}`}
              placeholder={'프로젝트 이름'}
              onChange={this.onNameChange}
            />
          </div>
          <div className={`${utils.inputWrapper}`} style={{ width: '100%' }}>
            <textarea
              className={`${style.description}`}
              placeholder={'프로젝트 설명'}
              onChange={this.onDescriptionChange}
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
