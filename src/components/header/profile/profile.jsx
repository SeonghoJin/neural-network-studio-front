import React from 'react';
import style from './profile.module.css';
import DropMenu from '../../utils/dropMenu/dropMenu';
import axios from "axios";

class Profile extends React.PureComponent {
    state = {
        dropMenuToggle: false,
    }

    openMenu = () => {
        this.setState({
                dropMenuToggle: !this.state.dropMenuToggle,
            });
    }

    logout = () => {
        axios({
            method:"DELETE",
            url: "/api/logout",
        }).then((res) => {
            this.props.history.push("/");
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <>
                <div className={`${style.profileImage}`} onClick={this.openMenu}>

                </div>
                <DropMenu open={this.state.dropMenuToggle}>
                    <div className={`${style.profileMenu}`}>
                        <a onClick={this.logout}>내 정보</a>
                    </div>
                    <div className={`${style.profileMenu}`}>
                        <a onClick={this.logout}>로그아웃</a>
                    </div>
                </DropMenu>
            </>
        )
    }
}

export default Profile;