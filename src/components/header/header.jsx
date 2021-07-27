import React from 'react';
import Profile from './profile/profile';
import Logo from './logo';
import Auth from './auth/auth';
import style from './index.module.css';


class Header extends React.PureComponent {
    render() {
        const auth = this.props.authenticated;

        return(
            <header className={`${style.topHeader}`}>
                <div className={`${style.headerWrapper}`}>
                    <Logo />
                    <div className="top-center">
                        {this.props.children}
                    </div>
                    <div className="top-right">
                        {
                            auth ?
                                <Profile /> :
                                <Auth />
                        }
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;