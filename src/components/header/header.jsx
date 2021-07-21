import React from 'react';
import Profile from './profile';
import Logo from './logo';
import style from './default.module.css';

class Header extends React.PureComponent {
    const
    render() {
        return(
            <header className={`${style.topHeader}`}>
                <div className={`${style.headerWrapper}`}>
                    <Logo />
                    <div className="top-center"></div>
                    <div className="top-right">
                        <Profile />
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;