import { getBearerToken } from "../../utils/auth";
import { setLoading } from "../Reducers/userSlice";
import axios from "../../utils/axios";

//////////////////////////////////////events actions //////////////////////////////////
export const getallevents = () => async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.post(
        "/events/all_event",
        {},
        getBearerToken()
      );
      dispatch(setLoading(false));
      return response.data.event;
    } catch (error) {
      dispatch(setLoading(false));
      throw error;
    }
  };
  
  
  export const createevents = (data) => async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.post(
        "/events/create_event",
        data,
        getBearerToken()
      );
      dispatch(setLoading(false));
      return response.data.forms;
    } catch (error) {
      dispatch(setLoading(false));
      throw error;
    }
  };
  
  export const editevents = (data) => async (dispatch) => {
    // console.log(data);
    try {
      dispatch(setLoading(true));
      const response = await axios.post(
        "/events/update_event",
        data,
        getBearerToken()
      );
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
      throw error;
    }
  };
  
  export const deletevents = (eventid) => async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.post(
        "/events/delete_event",
        {eventid},
        getBearerToken()
      );
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
      throw error;
    }
  };

//////////////////////////////////////Weekly Meetup actions //////////////////////////////////

export const getallmeetup = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post(
      "/meetups/all_meetup",
      {},
      getBearerToken()
    );
    dispatch(setLoading(false));
    return response.data.meetups;
  } catch (error) {
    dispatch(setLoading(false));
    throw error;
  }
};


export const createmeetup = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post(
      "/meetups/create_meetup",
      data,
      getBearerToken()
    );
    dispatch(setLoading(false));
    return response.data.forms;
  } catch (error) {
    dispatch(setLoading(false));
    throw error;
  }
};

export const editmeetup = (meetupdata) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post(
      "/meetups/update_meetup",
      meetupdata,
      getBearerToken()
    );
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
    throw error;
  }
};

export const deletmeetup = (meetupid) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post(
      "/meetups/delete_meetup",
      {meetupid},
      getBearerToken()
    );
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
    throw error;
  }
};

//////////////////////////////////////Masterclass actions //////////////////////////////////


export const getallmasterClass = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post(
      "/masterClass/all_master_class",
      {},
      getBearerToken()
    );
    dispatch(setLoading(false));
    return response.data.masterclass;
  } catch (error) {
    dispatch(setLoading(false));
    throw error;
  }
};


export const createmasterClass = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post(
      "/masterClass/create_master_class",
      data,
      getBearerToken()
    );
    dispatch(setLoading(false));
    return response.data.forms;
  } catch (error) {
    dispatch(setLoading(false));
    throw error;
  }
};

export const editmasterClass = (masterclassdata) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post(
      "/masterClass/update_master_class",
      masterclassdata,
      getBearerToken()
    );
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
    throw error;
  }
};

export const deletmasterClass = (masterclassid) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post(
      "/masterClass/delete_master_class",
      {masterclassid},
      getBearerToken()
    );
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
    throw error;
  }
};

//////////////////////////////////////All Atithi //////////////////////////////////

export const getallatithi = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.get(
      "/member/all-fwc-athithi",
      {},
      getBearerToken()
    );
    dispatch(setLoading(false));
    return response.data.atithiRequests;
  } catch (error) {
    dispatch(setLoading(false));
    throw error;
  }
};

//////////////////////////////////////All investment form //////////////////////////////////

export const getAllInvestmentFrom = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post(
      "/investment_circle/all_investment_circle",
      {},
      getBearerToken()
    );
    dispatch(setLoading(false));
    return response.data.investmentCircle;
  } catch (error) {
    dispatch(setLoading(false));
    throw error;
  }
};