import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGlobe, faLink } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom';

import style from './main.module.css';


class Main extends React.PureComponent {
    render() {
        const { user,  } = this.props;

        return (
            <div className={`${style.mainWrapper}`}>
                <header>
                    <div className={`${style.profile}`}>
                        <div className={`${style.profileImage}`}>
                            <img src={user.profileImage} />
                        </div>
                        <h2>{user.name}</h2>
                    </div>
                </header>
                <section className={`${style.userInfo}`}>
                    <div className={`${style.userMail}`}>
                        <FontAwesomeIcon icon={faEnvelope} color={'gray'} />
                        <a href={`mailto:ltw971@naver.com`}>
                            ltw971@naver.com
                        </a>
                    </div>
                    <div className={`${style.userWebsite}`}>
                        <FontAwesomeIcon icon={faGlobe} color={'gray'} />
                        <a href={'http://github.com/elixter'} target={'_blank'}>
                            http://github.com/elixter
                        </a>
                    </div>
                    <div className={`${style.userDescription}`}>
                        <p>{user.description}</p>
                    </div>
                </section>
                <footer>
                    프리셋 목록 들어감
                </footer>
            </div>
        )
    }
}

export default Main;