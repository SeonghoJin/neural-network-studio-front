import React from 'react';
import style from './index.module.css'
import utils from '../../utils/index.module.css'

class Main extends React.PureComponent {
    render() {
        return (
            <div className={`${style.mainWrapper}`}>
                <div className={`${style.serviceInfo}`}>
                    <div className={`${style.serviceDescription}`}>
                        GUI로 쉽게하는 딥러닝 통합 개발환경
                    </div>
                    <div className={`${utils.divButton} ${style.start}`}>
                        <a href="#">Get Start</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;