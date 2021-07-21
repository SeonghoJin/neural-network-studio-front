import React from 'react';
import style from './default.module.css'
import utils from '../utils/default.module.css'

class Main extends React.PureComponent {
    render() {
        return (
            <div className={`${style.mainWrapper}`}>
                <div className={`${style.serviceInfo}`}>
                    <div className={`${style.serviceDescription}`}>
                        좆밥도 쉽게하는 딥러닝 통합 개발환경
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