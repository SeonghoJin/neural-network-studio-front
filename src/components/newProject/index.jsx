import React from 'react';
import { withRouter } from 'react-router-dom';

import Header from '../header/header';
import Main from './main/main';

import style from './index.module.css';

class NewProject extends React.PureComponent {
    render() {
        return (
            <>
                <Header />
                <div className={`${style.wrapper}`}>
                    <Main />
                </div>
            </>
        )
    }
}

export default withRouter(NewProject);