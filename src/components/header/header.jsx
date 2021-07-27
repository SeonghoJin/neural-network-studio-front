import React from 'react';
import Profile from './profile/profile';
import Logo from './logo';
import Auth from './auth/auth';
import style from './index.module.css';


class Header extends React.Component {
    state = {
        auth: null,
        loading: true,
    }

    componentDidMount() {
        const {auth, user} = this.props;
        console.log(auth);
        this.setState({
            auth: auth,
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state.auth);
        if (prevState.auth !== this.state.auth) {
            this.setState({
                loading: false,
            })
        }
    }

    render() {
        const {auth, user} = this.props;
        console.log(this.state.loading);
        return(
            <header className={`${style.topHeader}`}>
                <div className={`${style.headerWrapper}`}>
                    <Logo />
                    <div className="top-center">
                        {this.props.children}
                    </div>
                    <div className="top-right">
                        {
                            this.state.loading ?
                                null:
                                (
                                    auth ?
                                    <Profile user={user}/> :
                                    <Auth />
                                )
                        }
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;