import axios from '../../utils/axios';
import { getBearerToken } from './../../utils/auth';


export const getAllMatchmakings = () => async (dispatch) => {
  try {
    const response = await axios.post(
      "/matchMaking/getAllMatchmakings",
      {},
      getBearerToken()
    );
    return response.data.data;
  } catch (error) {
    return error;
  }
};

export const createMatchmaking = (userId ) => async (dispatch) => {
    try {
        await axios.post(`/matchMaking/create_matchmaking/${userId }`, {}, getBearerToken());
        return true; 
    } catch (error) {
        console.error(error);
        return error;
    }
}

export const allowMatchmaking = (userId ) => async (dispatch) => {
    try {
        await axios.post(`/matchMaking/allow_matchmaking/${userId }`, {}, getBearerToken());
        return true; 
    } catch (error) {
        console.error(error);
        return error;
    }
}