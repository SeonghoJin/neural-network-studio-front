import React from 'react';

import style from './main.module.css';
import profile from '../../header/profile/default-profile.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit }from "@fortawesome/free-regular-svg-icons"
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const maxNameLen = 45;

export default class Header extends React.PureComponent {
  state = {
    name: this.props.user.name,
    profileImageUrl: this.props.user.profileImage.url,
  };

  onNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });

    this.props.onChangeName(e.target.value);
  };

  imageUpload = async () => {
   let newImage = document.getElementsByName('image')[0].files[0];
   let data = new FormData()
   data.append('image', newImage)

   await axios({
      method: 'post',
      url: '/api/image',
      data: data,
      redirect: 'follow',
      withCredentials: true,
    })
      .then((res) => {
        this.props.onChangeImage(res.data.id)
        this.setState({
          profileImageUrl: res.data.url,
        })
      })
      .catch((err) => {
        console.log(err)
      });
  };

  deleteImage = async () => {
    this.setState({
      profileImageUrl: "https://s3.ap-northeast-2.amazonaws.com/image.nns/default_profile.png",
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.profileImageUrl === this.state.profileImageUrl) {
      return false;
    }
    else {
      console.log("render");
    }
  }

  render() {
    const { user, modify } = this.props;
    return (
      <header className={style.headerWrapper}>
        <div className={`${style.profile}`}>
          <div className={`${style.profileImage}`}>
            {
              modify ?
              <button className={`${style.uploadImage}`}>
                <label htmlFor={"uploadImage"}>
                  <FontAwesomeIcon icon={faEdit} />
                  <span>edit</span>
                </label>
              </button> :
                null
            }
            {
              modify ?
                <button className={`${style.uploadImage} ${style.deleteImg}`} onClick={this.deleteImage}>
                  <FontAwesomeIcon icon={faTimes} />
                </button> :
                null
            }
            <input className={`${style.invisibleInput}`} type={"file"} id={"uploadImage"} name={"image"} accept={"image/*"} onChange={this.imageUpload}/>
            <img src={modify ? this.state.profileImageUrl : user.profileImage.url} alt={"profile"}/>
          </div>
          {modify ? (
            <input
              className={`${style.modifyName}`}
              defaultValue={this.state.name}
              onChange={this.onNameChange}
              maxLength={maxNameLen}
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
