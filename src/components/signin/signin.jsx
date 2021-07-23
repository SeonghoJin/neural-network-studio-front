import React from 'react';
import style from './default.module.css';
import utils from '../utils/default.module.css';

class Signin extends React.Component {
    state = {
        idFocus: false,
        pwFocus: false,
    }

    render() {
        return (
            <div className={`${style.signin}`}>
                <div className={style.signinLogo}>
                    <h1>Neural Network Studio</h1>
                </div>
                <form className={`${style.loginForm}`} method={"post"}>
                    <div className={`${utils.inputWrapper}`}>
                        <input placeholder={"아이디"}/>
                    </div>
                    <div className={`${utils.inputWrapper}`}>
                        <input placeholder={"비밀번호"} type={"password"}/>
                    </div>
                    <button className={`${style.loginButton}`} action={""}>로그인</button>
                </form>
                <div className={style.others}>
                    <a href={"#"}>비밀번호 찾기</a>
                    |
                    <a href={"#"}>회원가입</a>
                </div>
            </div>
        )
    }
}

export default Signin;