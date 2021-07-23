import React from 'react';
import Main from './main/main';
import Header from '../header/header';

class Landing extends React.PureComponent {
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