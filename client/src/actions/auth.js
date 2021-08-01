import * as api from "../api";
import { AUTH } from "../constants/actionTypes";

// action creators
export const signin = (formData, history) => async (dispatch) => {
  try {
    // login the user
    const { data } = await api.signin(formData);
    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
     const { data } = await api.signup(formData);
     dispatch({ type: AUTH, data });

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
