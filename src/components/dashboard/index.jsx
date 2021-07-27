import React from 'react';
import CardGrid from './cardGrid/cardGrid';
import Header from '../header/header';
import style from './index.module.css';
import utils from '../utils/index.module.css';
import axios from "axios";
import {Link, withRouter} from "react-router-dom";

class Dashboard extends React.PureComponent {
    state = {
        data: null,
        authLoading: true,
        loading: true,
        auth: false,
        user: null,
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

    getUser = async () => {
        await axios({
            method:"GET",
            url: "/api/user",
            withCredentials: true,
        }).then((res) => {
            this.setState({
                auth: true,
                user: res.data,
                authLoading: false,
            })
        }).catch(err => {
            this.setState({
                auth: false,
                authLoading: false,
            })
            alert('로그인이 필요합니다.');
            this.props.history.push('/login');
        })
    }

    componentDidMount() {
        this.getUser();
        this.getProjects();
    }

    render() {
        return (
            <>
                <Header auth={this.state.auth} user={this.state.user} loading={this.state.authLoading}/>
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

export default withRouter(Dashboard);