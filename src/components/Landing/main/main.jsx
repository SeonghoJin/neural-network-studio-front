import React from 'react';
import style from './index.module.css';
import utils from '../../utils/index.module.css';
import { Link } from 'react-router-dom';

const Main = () => {

  return (
    <div className={`${style.mainWrapper}`}>
      <div className={`${style.serviceInfo}`}>
        <div className={`${style.serviceDescription}`}>
          GUI로 쉽게하는 딥러닝 통합 개발환경
        </div>
        <div
          className={`${utils.divButton} ${style.start}`}
        >
          <Link to={'/dashboard'}>
            Get Start
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
