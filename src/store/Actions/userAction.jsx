import { removeUser, saveUser } from "../Reducers/userSlice";
import axios from '../../utils/axios';

export const loginUser = (credentials) => async (dispatch) => {
    try {
        const { data } = await axios.get('/login_user',credentials);
        localStorage.setItem('twk_fwc', (data.twk_fwc));
        dispatch(saveUser(data));
    } catch (error) {
        return error;
    }
}

export const createUser = (user) => async (dispatch) => {
    try {
        const { data } = await axios.get('/create_user', user);
        localStorage.setItem('twk_fwc', (data.twk_fwc));
        dispatch(saveUser(data));
    } catch (error) {
        return error;
    }
}

export const logoutUser = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/logout_user');
        dispatch(removeUser(data));
    } catch (error) {
        return error;
    }
}