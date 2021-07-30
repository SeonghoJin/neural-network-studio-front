import React from 'react';
import style from './index.module.css';

class Logo extends React.PureComponent {
  render() {
    return (
      <div className={`${style.logo}`}>
        <a href="/">
          <h1>Neural Network</h1>
          <span>Studio</span>
        </a>
      </div>
    );
  }
}

export default Logo;
