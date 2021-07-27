import React from 'react';
import Main from './main/main';
import Header from '../header/header';

import axios from "axios";

class Landing extends React.PureComponent {
    state = {
        auth: false,
        user: null,
    }

    getUser = async () => {
        axios({
            method:"GET",
            url: "/api/user",
            withCredentials: true,
        }).then((res) => {
            if (res.status === 401) {
                this.setState({
                    auth: false,
                })
            }
            else {
                this.setState({
                    auth: true,
                    user: res.data,
                })
            }
        })
    }

    componentDidMount() {
        this.getUser();
    }

    render() {
        return (
            <>
                <Header auth={this.state.auth} user={this.state.user}/>
                <Main auth={this.state.auth}/>
            </>
        )
    }
}

export default Landing;