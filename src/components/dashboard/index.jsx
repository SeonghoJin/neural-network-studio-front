import React from 'react';
import CardGrid from './cardGrid/cardGrid';
import Header from '../header/header';
import style from './index.module.css';
import axios from "axios";

class Dashboard extends React.PureComponent {
    state = {
        data: null,
        loading: true,
    }

    getProjects = async () => {
        this.setState({
            loading: true,
        })
        const res = await axios.get('http://52.78.247.102:8080/api/projects?curPage=1&pageSize=10&sort=&filterType=&filterString=');
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