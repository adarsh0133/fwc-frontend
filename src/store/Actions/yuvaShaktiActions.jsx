import axios from '../../utils/axios';
import { getBearerToken } from './../../utils/auth';


export const submitYuvaShaktiForm = (formdata) => async (dispatch) => {
    try {
        const { data } = await axios.post('/yuvaShakti/create_yuvaShakti', formdata, getBearerToken());
    } catch (error) {
        console.error("Failed to fetch member details:", error);
    }
}

export const getYuvaShaktiForm = () => async (dispatch) => {
    try {
        const { data } = await axios.post('/yuvaShakti/all_yuvaShakti',{}, getBearerToken());
        return data.yuvaShakti;
    } catch (error) {
        console.error("Failed to fetch member details:", error);
    }
}