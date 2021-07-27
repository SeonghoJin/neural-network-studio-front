import React, {useEffect, useState} from 'react';
import Profile from './profile/profile';
import Logo from './logo';
import Auth from './auth/auth';
import style from './index.module.css';

const Header = (props) => {
    const {auth, user, children, loading} = props;


    return (
        <header className={`${style.topHeader}`}>
            <div className={`${style.headerWrapper}`}>
                <Logo />
                <div className="top-center">
                    {children}
                </div>
                <div className="top-right">
                    {!loading && (auth ? <Profile user={user}/> : <Auth/>)}
                </div>
            </div>
        </header>
        );
}

export default Header;
