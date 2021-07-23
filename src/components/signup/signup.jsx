import React from 'react';
import style from './default.module.css';
import utils from '../utils/default.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons"

class Signup extends React.PureComponent {
    state = {
        pwVisible: false,
    }

    clickEye = () => {
        let nextState = !this.state.pwVisible;
        this.setState({
           pwVisible: nextState,
        });
    }

    render() {
        return (
            <>
                <div className={`${style.singupWrapper}`}>
                    <div className={`${style.formWrapper} ${utils.flexColumn}`}>
                        <header>
                            <h1>Neural Network Studio</h1>
                            <div><h3>계정만들기</h3></div>
                        </header>
                        <main>
                            <form className={`${style.signupForm} `}>
                                <div className={`${utils.inputWrapper} ${utils.flexColumn}`}>
                                    <input placeholder={"사용자 이름"} />
                                </div>
                                <div className={`${utils.inputWrapper} ${utils.flexColumn}`}>
                                    <div className={`${utils.inputWrapper}`}>
                                        <input type={ this.state.pwVisible ? "" : "password"} placeholder={"비밀번호"} />
                                        <a href={"#"} onClick={this.clickEye} className={`${utils.iconButton}`}>
                                            <FontAwesomeIcon icon={ this.state.pwVisible ? faEyeSlash : faEye } />
                                        </a>
                                    </div>
                                    <span >기호, 영문, 숫자 중 2가지 이상 조합</span>
                                </div>
                                <div className={`${utils.divButton} ${style.submit}`}>
                                    <a href={"#"}>제출</a>
                                </div>
                            </form>
                        </main>
                        <footer>

                        </footer>
                    </div>
                </div>
            </>
        )
    }
}

export default Signup;