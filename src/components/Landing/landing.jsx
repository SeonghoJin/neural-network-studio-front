import React from 'react';
import Main from './main/main';
import Header from '../header/header';

import cookie from 'react-cookies';

class Landing extends React.PureComponent {
    state = {
        auth: false,
        token: '',
    }

    componentDidMount() {
        console.log(cookie.loadAll())
    }

    render() {
        return (
            <>
                <Header />
                <Main />
            </>
        )
    }
}

export default Landing;