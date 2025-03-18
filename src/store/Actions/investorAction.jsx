import axios from '../../utils/axios';
import { getBearerToken } from './../../utils/auth';


export const submitInverstorCircleDetails = (formData) => async (dispatch) => {
    try {
        const { data } = await axios.post('/investment_circle/create_investment_circle', formData, getBearerToken());
    } catch (error) {
        return error;
    }
}