import React from 'react';
import CardGrid from './cardGrid/cardGrid';
import Header from '../header/header';
import style from './index.module.css';
import utils from '../utils/index.module.css';
import axios from "axios";
import {Link} from "react-router-dom";

class Dashboard extends React.PureComponent {
    state = {
        data: null,
        loading: true,
    }

    getProjects = async () => {
        this.setState({
            loading: true,
        })
        const res = await axios.get('/api/projects?curPage=1&pageSize=10&sort=&filterType=&filterString=');
        this.setState({
            data: res.data.projects,
        })
        this.setState({
            loading: false,
        })
    }

    componentDidMount() {
        this.getProjects();
    }

    render() {
        return (
            <>
                <Header />
                <div className={`${style.mainWrapper}`}>
                    <div className={`${style.dashboardMenu}`}>
                        <div className={`${utils.divButton} ${style.createButton}`}>
                            <Link to='/newProject'>프로젝트 생성</Link>
                        </div>
                    </div>
                    {
                        this.state.loading ?
                            null:
                            <CardGrid projects={this.state.data}/>
                    }

                </div>
            </>
        )
    }
}

export default Dashboard;