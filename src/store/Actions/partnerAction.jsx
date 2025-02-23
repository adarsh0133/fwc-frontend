import axios from '../../utils/axios';
import { getBearerToken } from './../../utils/auth';


export const submitMemberDetails = (formData) => async (dispatch) => {
    try {
        const { data } = await axios.post('/member/create_member', formData , getBearerToken());
    } catch (error) {
        return error;
    }
}

export const sendMemberPayment = ( formData) => async (dispatch) => {
  try {
    const order = await axios.post(`/member/create-order`,formData );
    return order.data;
  } catch (error) {
    console.error("Failed to fetch portfolios:", error);
  }
};

export const MemberPaymentSuccess = (id, email) => async (dispatch) => {
  try {
    const order = await axios.post(`/member/paymentsuccess/${id}`, {email});
    return order.data;
  } catch (error) {
    console.error("Failed Success", error);
  }
};
