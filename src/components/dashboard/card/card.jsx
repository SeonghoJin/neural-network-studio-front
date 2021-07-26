import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'

import style from './card.module.css';

class Card extends React.PureComponent {


    render() {
        return (
            <>
                <div className={`${style.card}`}>
                    <header className={`${style.cardHeader}`}>
                        <h4>Project title</h4>
                        <FontAwesomeIcon icon={faEllipsisH} />
                    </header>
                    <main className={`${style.cardMain}`}>
                        <span>소유자 : elixter</span>
                        <span>마지막 수정 : 2021-07-26</span>
                    </main>
                    <footer className={`${style.cardFooter}`}>
                        <button className={style.startButton}>프로젝트 열기</button>
                    </footer>
                </div>
            </>
        )
    }
}

export default Card;