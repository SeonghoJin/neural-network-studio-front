import React from 'react';
import Profile from './profile/profile';
import Logo from './logo';
import Auth from './auth/auth';
import style from './index.module.css';


class Header extends React.Component {
    state = {
        auth: false,
        loading: true,
    }

    componentDidMount() {
        // console.log(auth);
        if (localStorage.getItem("userID") !== null) {
            if (this.props.user !== null) {
                this.setState({
                    auth: true,
                    loading: false,
                })
            }
        }
        else {
            this.setState( {
                auth: false,
                loading: false,
            })
        }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps !== this.props) {
            console.log('updated');
            if (localStorage.getItem("userID") !== null) {
                console.log("authorized");
                if (this.props.user !== null) {
                    this.setState({
                        auth: true,
                        loading: false,
                    })
                }
                else {
                    this.setState({
                        auth: true,
                        loading: true,
                    })
                }
            }
            else {
                console.log("unauthorized");
                this.setState({
                    auth: false,
                    loading: false,
                })
            }
        }
        else {
            return false;
        }

    }

    render() {
        const {auth, user} = this.props;
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
                                    this.state.auth ?
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