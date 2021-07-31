import * as api from "../api";
import { AUTH } from "../constants/actionTypes";

// action creators
export const signin = (formData, history) => async (dispatch) => {
  try {
    // login the user

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};


export const signup = (formData, history) => async (dispatch) => {
  try {
    // sigup the user

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
