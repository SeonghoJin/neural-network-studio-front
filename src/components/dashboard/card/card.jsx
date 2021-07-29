import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import DropMenu from "../../utils/dropMenu/dropMenu";
import axios from "axios";
import { withRouter } from 'react-router-dom';
import moment from 'moment';

import style from './card.module.css';

class Card extends React.PureComponent {
    state = {
        dropMenuToggle: false,
        projectNo: '',
    }

    dropRef = React.createRef(); // create Ref

    // open dropdown menu
    openMenu = () => {
        this.setState({
            dropMenuToggle: !this.state.dropMenuToggle,
        });
    }

    // close dropdown menu
    closeMenu = (e) => {
        if (!this.dropRef.current.contains(e.target)) {
            this.setState({
                dropMenuToggle: false,
            })
        }
    }

    // delete project handler
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

    openProject = () => {
        window.location.href = `/project/${this.props.id}`
    }

    componentDidMount() {
        const {title, lastUpdate, description, id} = this.props;
        this.setState({
            projectNo: id,
        })
        document.addEventListener('mousedown', this.closeMenu);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.closeMenu);
    }

    render() {
        const {title, lastUpdate, description} = this.props;
        const update = new moment(lastUpdate).format("YYYY년 MM월 DD일 HH:mm:ss");

        return (
            <>
                <div className={`${style.card}`}>
                    <header className={`${style.cardHeader}`}>
                        <div className={`${style.cardTitle}`}>
                            <h4>{title}</h4>
                        </div>
                        <div>
                            <button className={`${style.ellipsisWrapper}`} onClick={this.openMenu} ref={this.dropRef}>
                                <FontAwesomeIcon icon={faEllipsisH} />
                                <DropMenu open={this.state.dropMenuToggle} custom={style.dropMenu} >
                                    <div className={`${style.projectMenu}`}>
                                        <a href="#">프로젝트 수정</a>
                                    </div>
                                    <div className={`${style.projectMenu}`}>
                                        <a href="#" onClick={this.deleteProject}>프로젝트 삭제</a>
                                    </div>
                                </DropMenu>
                            </button>
                        </div>
                    </header>
                    <main className={`${style.cardMain}`}>
                        <div className={`${style.descript}`}>
                            <span className={`${style.descript}`}>{description}</span>
                        </div>
                        <span className={`${style.lastUpdate}`}>마지막 수정 : {update}</span>
                    </main>
                    <footer className={`${style.cardFooter}`}>
                        <button className={style.startButton} onClick={this.openProject}>프로젝트 열기</button>
                    </footer>
                </div>
            </>
        )
    }
}

export default withRouter(Card);