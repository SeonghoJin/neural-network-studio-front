import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import DropMenu from "../../utils/dropMenu/dropMenu";
import axios from "axios";
import { withRouter } from 'react-router-dom';

import style from './card.module.css';

class Card extends React.PureComponent {
    state = {
        dropMenuToggle: false,
        projectNo: '',
    }

    openMenu = () => {
        this.setState({
            dropMenuToggle: !this.state.dropMenuToggle,
        });
    }

    closeMenu = () => {
        this.setState({
            dropMenuToggle: false,
        })
    }

    deleteProject = async () => {
        let deleted = false;
        // eslint-disable-next-line no-restricted-globals
        if (confirm("프로젝트를 삭제하시겠습니까?")) {
            await axios.delete(`/api/project/${this.state.projectNo}`)
                .then(res => {
                    deleted = true;
                })
                .catch({

                })
        }
        else {
            return;
        }
        if (deleted) window.location.href = "/dashboard";
    }

    componentDidMount() {
        const {title, lastUpdate, description, id} = this.props;
        this.setState({
            projectNo: id,
        })
    }

    render() {
        const {title, lastUpdate, description} = this.props;
        return (
            <>
                <div className={`${style.card}`}>
                    <header className={`${style.cardHeader}`}>
                        <div className={`${style.cardTitle}`}>
                            <h4>{title}</h4>
                        </div>
                        <div>
                            <div className={`${style.ellipsisWrapper}`}>
                                <FontAwesomeIcon size="xl" onClick={this.openMenu} icon={faEllipsisH} />
                            </div>
                            <DropMenu open={this.state.dropMenuToggle} color={style.dropMenu}>
                                <div className={`${style.projectMenu}`}>
                                    <a href="#">프로젝트 수정</a>
                                </div>
                                <div className={`${style.projectMenu}`}>
                                    <a href="#" onClick={this.deleteProject}>프로젝트 삭제</a>
                                </div>
                            </DropMenu>
                        </div>
                    </header>
                    <main className={`${style.cardMain}`}>
                        <div className={`${style.descript}`}>
                            <span className={`${style.descript}`}>{description}</span>
                        </div>
                        <span>마지막 수정 : {lastUpdate}</span>
                    </main>
                    <footer className={`${style.cardFooter}`}>
                        <button className={style.startButton}>프로젝트 열기</button>
                    </footer>
                </div>
            </>
        )
    }
}

export default withRouter(Card);