import axios from '../../utils/axios';
import { getBearerToken } from './../../utils/auth';


export const getMemberDetails = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/member/all_members', getBearerToken());
    return data;
  } catch (error) {
    console.error("Failed to fetch member details:", error);
  }
}

export const submitMemberDetails = (formData) => async (dispatch) => {
  try {
    const { data } = await axios.post('/member/create_member', formData, getBearerToken());
  } catch (error) {
    return error;
  }
}

export const sendMemberPayment = (formData) => async (dispatch) => {
  try {
    const order = await axios.post(`/member/create-order`, formData);
    return order.data;
  } catch (error) {
    console.error("Failed to fetch:", error);
  }
};

export const MemberPaymentSuccess = (id, email) => async (dispatch) => {
  try {
    const order = await axios.post(`/member/paymentsuccess/${id}`, { email });
    return order.data;
  } catch (error) {
    console.error("Failed Success", error);
  }
};

export const ApproveMember = (email) => async (dispatch) => {
  try {
    const order = await axios.post(`/member/approve_member`, { email }, getBearerToken());
    return order.data;
  } catch (error) {
    return error
  }
}

export const RemoveMember = (email) => async (dispatch) => {
  try {
    const order = await axios.post(`/member/remove_member`, { email }, getBearerToken());
    return order.data;
  } catch (error) {
    return error;
  }
}

export const getMembersPayments = () => async (dispatch) => {
  try {
    const { data } = await axios.post('/member/all_members_payments', {}, getBearerToken());
    return data;
  } catch (error) {
    console.error("Failed to fetch member details:", error);
  }
}

export const submitAtithiDetails = (formData) => async (dispatch) => {
  try {
    const { data } = await axios.post('/member/submit-fwc-athithi-request', { formData }, getBearerToken());
  } catch (error) {
    return error;
  }
}

export const submitSpotlightBoost = (formData) => async (dispatch) => {
  try {
    const realFormData = new FormData();
    for (const key in formData) {
      realFormData.append(key, formData[key]);
    }
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: getBearerToken().headers.Authorization,
      },
    };
    const { data } = await axios.post('/spotlightBoost/create_spotlight', realFormData, config);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const submitZoomPremium = (formData) => async (dispatch) => {
  try {
    const realFormData = new FormData();
    for (const key in formData) {
      realFormData.append(key, formData[key]);
    }
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: getBearerToken().headers.Authorization,
      },
    };
    const { data } = await axios.post('/zoomPremium/create_zoom', realFormData, config);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}