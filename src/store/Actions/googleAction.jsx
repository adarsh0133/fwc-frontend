import axios from "../../utils/axios";
import { currentUser } from "./userAction";

export const googleAuth = (code) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/user/google_auth?code=${code}`);
    if (data.twk_fwc) {
      localStorage.setItem("twk_fwc", data.twk_fwc);
      await dispatch(currentUser());
    } else {
      throw new Error("No token received from Google auth");
    }
  } catch (error) {
    return error;
  }
};