import { removeUser, saveUser } from "../Reducers/userSlice";
import axios from '../../utils/axios';
import { getBearerToken } from './../../utils/auth';

export const getUsers = () => async (dispatch) => {
    try {
      const { data } = await axios.get('/user/all_users', getBearerToken());
      return data;
    } catch (error) {
      console.error("Failed to fetch member details:", error);
    }
  }

export const currentUser = () => async (dispatch) => {
    try {
        const { data } = await axios.get(
            "/user/current_user",
            getBearerToken()
          );
          dispatch(saveUser(data.user));
    } catch (error) {
        return error;
    }
}

export const loginUser = (credentials) => async (dispatch) => {
    try {
        const { data } = await axios.post('/user/login_user',credentials);
        localStorage.setItem('twk_fwc', (data.twk_fwc));
        dispatch(saveUser(data.user));
    } catch (error) {
        return error;
    }
}

export const createUser = (user) => async (dispatch) => {
    try {
        const { data } = await axios.get('/user/create_user', user);
        localStorage.setItem('twk_fwc', (data.twk_fwc));
        dispatch(saveUser(data.user));
    } catch (error) {
        return error;
    }
}

export const logoutUser = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/user/logout_user');
        dispatch(removeUser());
    } catch (error) {
        return error;
    }
}