import React from 'react';
import { Link } from 'react-router-dom';
import style from './index.module.css';

class Logo extends React.PureComponent {
  render() {
    return (
      <div className={`${style.logo}`}>
        <Link to="/">
          <h1>Neural Network</h1>
          <span>Studio</span>
        </Link>
      </div>
    );
  }
}

export default Logo;
