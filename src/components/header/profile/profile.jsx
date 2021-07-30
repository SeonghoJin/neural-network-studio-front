import React from 'react';
import style from './profile.module.css';
import DropMenu from '../../utils/dropMenu/dropMenu';
import axios from 'axios';
import profile from './default-profile.png';

import { Link } from 'react-router-dom';

class Profile extends React.PureComponent {
  state = {
    dropMenuToggle: false,
  };

  dropRef = React.createRef(); // create Ref for drop menu

  // open drop menu
  openMenu = () => {
    this.setState({
      dropMenuToggle: !this.state.dropMenuToggle,
    });
  };

  // close drop menu
  closeMenu = (e) => {
    if (!this.dropRef.current.contains(e.target)) {
      this.setState({
        dropMenuToggle: false,
      });
    }
  };

  // logout handler
  logout = () => {
    axios({
      method: 'DELETE',
      url: '/api/logout',
    })
      .then((res) => {
        window.location.href = '/';
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.closeMenu);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.closeMenu);
  }

  render() {
    const { user } = this.props;
    console.log(user.profileImage);
    return (
      <>
        <div
          className={`${style.profileImage}`}
          onClick={this.openMenu}
          ref={this.dropRef}
        >
          <img src={user.profileImage === '' ? profile : user.profileImage} />

          <DropMenu open={this.state.dropMenuToggle} custom={style.dropMenu}>
            <div className={`${style.profileMenu}`}>
              <Link to="/profile">내 정보</Link>
            </div>
            <div className={`${style.profileMenu}`}>
              <a href="#" onClick={this.logout}>
                로그아웃
              </a>
            </div>
          </DropMenu>
        </div>
      </>
    );
  }
}

export default Profile;
