import axios, { AxiosRequestConfig } from 'axios';
import config from '../../config';


const axiosConfig : AxiosRequestConfig = {
  withCredentials: true
}

interface SignUpParams {
  id: string,
  pw: string
}

export const signUp = async (signUpParams: SignUpParams) => {
  const response = await axios.post(
    config.SERVER_PREFIX+`/api/user`,
    signUpParams,
    axiosConfig
  );

  return response.data;
}

interface UserProfile {
  name:         string;
  profileImage: string;
  description:  string;
  createTime:   Date;
  updateTime:   Date;
}

export const getUserProfile = async () => {
  const response = await axios.get<UserProfile>(
    config.SERVER_PREFIX+`/api/user`,
    axiosConfig
  );

  return response.data;
}

interface UserProfileToUpdateParams {
  profileImage: string;
  description:  string;
}

interface UpdatedUserProfile {
  profileImage: string;
  description:  string;
}

export const updateUserProfile = async (userProfileToUpdate : UserProfileToUpdateParams) => {
  const response = await axios.put<UpdatedUserProfile>(
    config.SERVER_PREFIX+`/api/user`,
    userProfileToUpdate,
    axiosConfig
  );

  return response.data;
}




