import React from 'react';
import Signin from './signin';
import style from './index.module.css';

class LoginPage extends React.PureComponent {
  render() {
    return (
      <div className={style.signinWrapper}>
        <Signin />
      </div>
    );
  }
}

export default LoginPage;
