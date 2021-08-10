import React from 'react';
import style from './index.module.css';

const Main = () => {
  const getStart = () => {
    window.location.href = "/dashboard";
  }

  return (
    <div className={`${style.mainWrapper}`}>
      <div className={`${style.serviceInfo}`}>
        <div className={`${style.serviceDescription}`}>
          GUI로 쉽게하는 딥러닝 통합 개발환경
        </div>
        <button className={`${style.start}`} type="button" onClick={getStart}>
            Get Start
        </button>
      </div>
    </div>
  );
};

export default Main;
