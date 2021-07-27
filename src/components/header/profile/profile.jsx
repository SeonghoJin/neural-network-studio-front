import React from 'react';
import style from './profile.module.css';
import DropMenu from '../../utils/dropMenu/dropMenu';
import axios from "axios";

class Profile extends React.PureComponent {
    state = {
        dropMenuToggle: false,
    }

    dropRef = React.createRef(); // create Ref for drop menu

    // open drop menu
    openMenu = () => {
        this.setState({
            dropMenuToggle: !this.state.dropMenuToggle,
        });
    }

    // close drop menu
    closeMenu = (e) => {
        if (!this.dropRef.current.contains(e.target)) {
            this.setState({
                dropMenuToggle: false,
            })
        }
    }

    // logout handler
    logout = () => {
        axios({
            method:"DELETE",
            url: "/api/logout",
        }).then((res) => {
            localStorage.removeItem("userID");
            window.location.href = "/";
        }).catch(err => {
            console.log(err);
        });
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.closeMenu);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.closeMenu);
    }

    render() {
        const {user} = this.props;
        return (
            <>
                <div className={`${style.profileImage}`} onClick={this.openMenu} ref={this.dropRef}>
                    <img src={user.profileImage} />
                    <DropMenu open={this.state.dropMenuToggle} color={style.dropMenu}>
                        <div className={`${style.profileMenu}`}>
                            <a href="#">내 정보</a>
                        </div>
                        <div className={`${style.profileMenu}`}>
                            <a href="#" onClick={this.logout}>로그아웃</a>
                        </div>
                    </DropMenu>
                </div>

            </>
        )
    }
}

export default Profile;