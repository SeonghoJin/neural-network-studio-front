import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faLink } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import style from './main.module.css';

const maxNameLen = 45;
const maxDescriptionLen = 2000;

export default class UserInfo extends React.PureComponent {
  state = {
    email: '',
    webSite: '',
    description: '',
  };

  componentDidMount() {
    this.setState({
      email: this.props.user.email,
      webSite: this.props.user.webSite,
      description: this.props.user.description,
    });
  }

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });

    this.props.onChangeEmail(e.target.value);
  };

  onChangeWebSite = (e) => {
    this.setState({
      webSite: e.target.value,
    });

    this.props.onChangeWebSite(e.target.value);
  };

  onChangeDescription = (e) => {
    this.setState({
      description: e.target.value,
    });
    this.props.onChangeDescription(e.target.value);
  };

  render() {
    const { user, modify, onChangeEmail, onChangeWebSite } = this.props;

    return (
      <section className={`${style.userInfo}`}>
        <div className={`${style.userMail}`}>
          <FontAwesomeIcon icon={faEnvelope} color={'gray'} />
          {modify ? (
            <input
              className={`${style.modifyInput}`}
              defaultValue={this.state.email}
              onChange={this.onChangeEmail}
            />
          ) : (
            <a href={`mailto:${user.email}`}>{user.email}</a>
          )}
        </div>
        <div className={`${style.userWebsite}`}>
          <FontAwesomeIcon icon={faGlobe} color={'gray'} />
          {modify ? (
            <input
              className={`${style.modifyInput}`}
              defaultValue={this.state.webSite}
              onChange={this.onChangeWebSite}
            />
          ) : (
            <a href={user.webSite} target={'_blank'}>
              {user.webSite}
            </a>
          )}
        </div>
        <div className={`${style.userDescription}`}>
          {modify ? (
            <textarea
              className={`${style.modifyTextarea}`}
              defaultValue={this.state.description}
              onChange={this.onChangeDescription}
              maxLength={maxDescriptionLen}
            />
          ) : (
            <p>{user.description}</p>
          )}
        </div>
      </section>
    );
  }
}
