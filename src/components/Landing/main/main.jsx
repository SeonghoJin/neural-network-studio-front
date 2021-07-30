import React from 'react';
import style from './index.module.css';
import utils from '../../utils/index.module.css';
import { Link, withRouter } from 'react-router-dom';

class Main extends React.PureComponent {
  startService = () => {
    const { auth } = this.props;
    if (auth) {
      window.location.href = '/dashboard';
    } else {
      alert('로그인이 필요합니다.');
      this.props.history.push('/login');
    }
  };

  render() {
    return (
      <div className={`${style.mainWrapper}`}>
        <div className={`${style.serviceInfo}`}>
          <div className={`${style.serviceDescription}`}>
            GUI로 쉽게하는 딥러닝 통합 개발환경
          </div>
          <div
            className={`${utils.divButton} ${style.start}`}
            onClick={this.startService}
          >
            <a href="#">Get Start</a>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Main);
