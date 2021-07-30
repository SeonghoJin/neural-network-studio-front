import React from 'react';

import style from './main.module.css';
import profile from '../../header/profile/default-profile.png';

export default class Header extends React.PureComponent {
  state = {
    name: this.props.user.name,
    profileImage: this.props.user.profileImage,
  };

  onNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });

    this.props.onChangeName(e.target.value);
  };

  render() {
    const { user, modify } = this.props;
    return (
      <header className={style.headerWrapper}>
        <div className={`${style.profile}`}>
          <div className={`${style.profileImage}`}>
            <img src={user.profileImage === '' ? profile : user.profileImage} />
          </div>
          {modify ? (
            <input
              className={`${style.modifyName}`}
              defaultValue={this.state.name}
              onChange={this.onNameChange}
            />
          ) : (
            <h2>{user.name}</h2>
          )}
        </div>
        {this.props.children}
      </header>
    );
  }
}
